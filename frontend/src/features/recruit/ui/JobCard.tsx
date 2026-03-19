import React from 'react';
import { Card } from '../../../shared/ui/Card';
import { Button } from '../../../shared/ui/Button';
import { mockPubSub } from '../../../shared/lib/mockPubSub';

export interface Job {
  id: string;
  title: string;
  hospitalName: string;
  salary: string;
  location: string;
  experience: string;
  imageUrl: string;
  isClosed?: boolean;
}

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const handleScrap = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Simulate Pub/Sub event for scraping a job
    mockPubSub.publish('JOB_SCRAPPED', job);
  };

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`[${job.hospitalName}] 지원이 완료되었습니다.`);
  };

  return (
    <Card hoverable className="h-full flex flex-col group relative overflow-hidden rounded-2xl border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {/* Placeholder for hospital or environment image */}
        <span className="text-slate-400 text-sm font-bold px-4 text-center tracking-tight drop-shadow-sm">{job.hospitalName}</span>
        
        {job.isClosed && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-10">
            <span className="bg-white/95 px-5 py-2 rounded-full text-slate-800 font-bold text-sm shadow-md tracking-tight">채용 마감</span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow bg-white z-20">
        <span className="text-[11px] font-bold text-[var(--color-secondary)] mb-1.5 tracking-wide bg-blue-50 w-fit px-1.5 py-0.5 rounded-sm">{job.hospitalName}</span>
        <h3 className="text-[15px] font-bold text-[var(--color-text-main)] mb-3 line-clamp-2 min-h-[44px] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
          {job.title}
        </h3>
        
        <div className="mt-auto flex flex-col gap-1.5 mb-5">
          <div className="text-[13px] font-bold text-slate-700 flex items-center">
             <span className="text-blue-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-blue-200 mr-2 break-keep bg-white">급여</span>
             {job.salary}
          </div>
          <div className="text-[12px] font-medium text-slate-400 flex items-center gap-2 mt-1">
            <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-500">{job.location}</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded-md text-slate-500">{job.experience}</span>
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button 
            variant="outline" 
            className="flex-1 text-xs py-2 font-bold border-gray-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all rounded-lg"
            disabled={job.isClosed}
            onClick={handleScrap}
          >
            스크랩
          </Button>
          <Button 
            variant="primary" 
            className="flex-1 text-xs py-2 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-lg"
            disabled={job.isClosed}
            onClick={handleApply}
          >
            즉시 지원
          </Button>
        </div>
      </div>
    </Card>
  );
};
