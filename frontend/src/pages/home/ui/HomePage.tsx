import React from 'react';
import { AppLayout } from '../../../widgets/layout/ui/AppLayout';
import { JobCard, type Job } from '../../../features/recruit/ui/JobCard';

// Mock jobs
const MOCK_JOBS: Job[] = [
  { id: '1', title: '[서울 강남치과] 진료실 치과위생사 정규직 채용 (신입/경력)', hospitalName: '서울 강남치과', salary: '연봉 3,500만원 이상', location: '서울 강남구', experience: '경력 1년 이상', imageUrl: '' },
  { id: '2', title: '[바른이치과병원] 코디네이터 및 상담실장 초빙', hospitalName: '바른이치과병원', salary: '면접 후 결정', location: '경기 용인시', experience: '무관(신입포함)', imageUrl: '' },
  { id: '3', title: '[미소드림치과] 주 4일 진료 스탭 구인 (워라밸 보장)', hospitalName: '미소드림치과', salary: '월 250만원 (기본급)', location: '서울 마포구', experience: '경력 3년 이상', imageUrl: '' },
  { id: '4', title: '[탑플란트치과] 수술실 간호조무사 모집', hospitalName: '탑플란트치과', salary: '연봉 3,200만원', location: '부산 해운대구', experience: '무관(신입포함)', imageUrl: '', isClosed: true },
  { id: '5', title: '[튼튼어린이치과] 소아치과 치과위생사 모집 (토요일 오전진료)', hospitalName: '튼튼어린이치과', salary: '면접 후 결정', location: '인천 연수구', experience: '경력 2년 이상', imageUrl: '' },
];

const CATEGORIES = [
  '전체', '의사', '치과위생사', '간호조무사', '코디네이터', '병원행정', '기공사', '파트타임'
];

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      {/* Categories (Horizontal) */}
      <section className="bg-white border-b border-[var(--color-border)] mb-6 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3.5 border-t border-gray-50 overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap md:flex-wrap gap-2.5">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={cat}
                className={`flex-none px-6 py-2 text-[13px] rounded-full transition-all duration-200 ${
                  idx === 0 
                    ? 'bg-gradient-to-r from-[var(--color-primary)] to-blue-700 text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Banner Area */}
      <section className="bg-slate-50 h-[320px] flex items-center mb-12 relative group overflow-hidden mt-2 mx-4 sm:mx-6 lg:mx-8 rounded-3xl max-w-7xl xl:mx-auto">
        <div className="px-8 sm:px-12 w-full z-10">
          <div className="bg-white/85 backdrop-blur-md p-8 pt-10 pb-10 rounded-2xl max-w-xl border border-white/60 shadow-xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full blur-3xl -mx-10 -my-10 mix-blend-multiply opacity-30"></div>
            <span className="inline-block px-3.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold tracking-wider rounded-full mb-5 shadow-sm uppercase">
              맞춤 추천 공고
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-[1.2] tracking-tight">
              내게 딱 맞는 병원, <br/>
              MEDiJOB에서 <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-teal-400">거침없이</span> 찾으세요
            </h1>
            <p className="text-slate-500 text-[15px] mt-2 font-medium">나의 가치를 알아주는 최고의 치과 병의원, 한눈에 확인하세요.</p>
          </div>
        </div>
        {/* Background Abstract Geometric Shapes */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/60 to-transparent pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow mb-20 block">
        {/* Job Grid Area */}
        <section className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="w-2 h-6 bg-[var(--color-primary)] rounded-full inline-block"></span>
                 <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">실시간 HOT 채용공고</h2>
              </div>
              <p className="text-[14px] text-slate-500 font-medium ml-4">지금 가장 지원율이 높은 인기 병원 공고를 확인하세요.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm font-bold text-slate-400 border border-slate-200 rounded-lg p-1 bg-white shadow-xs">
              <span className="text-blue-600 cursor-pointer bg-blue-50 px-3 py-1.5 rounded-md transition-colors">인기순</span>
              <span className="hover:text-slate-700 cursor-pointer px-3 py-1.5 rounded-md transition-colors">마감임박순</span>
              <span className="hover:text-slate-700 cursor-pointer px-3 py-1.5 rounded-md transition-colors">최신순</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-x-6 lg:gap-y-10 gap-x-4 gap-y-6">
            {MOCK_JOBS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
            {MOCK_JOBS.map(job => (
              <JobCard key={`${job.id}-dup`} job={{...job, id: `${job.id}-dup`}} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};
