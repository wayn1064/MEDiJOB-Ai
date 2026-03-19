import React from 'react';
import { AppLayout } from '../../../widgets/layout/ui/AppLayout';
import { JobCard } from '../../../features/recruit/ui/JobCard';

// Mock jobs
const MOCK_PRODUCTS = [
  { id: '1', name: '프리미엄 덴탈 마스크 (50매)', brand: 'MEDi-SAFE', price: 4500, originalPrice: 6000, discountRate: 25, imageUrl: '' },
  { id: '2', name: '고급 수술용 글러브 (100매/L)', brand: 'Glovetics', price: 12000, imageUrl: '' },
  { id: '3', name: '치과용 일회용 석션 팁 (100개입)', brand: 'Sucian', price: 8900, originalPrice: 10000, discountRate: 11, imageUrl: '' },
  { id: '4', name: '멸균 K-File 21mm (6개입)', brand: 'EndoMaster', price: 15000, imageUrl: '', isSoldOut: true },
  { id: '5', name: '의료용 멸균 거즈 2x2 (200매)', brand: 'GauzePlus', price: 3500, originalPrice: 5000, discountRate: 30, imageUrl: '' },
];

const CATEGORIES = [
  '전체', '기본충전재료', '인상재', '엔도', '기공/레진', '교정', '소장비', '수술용품', '감염관리'
];

export const HomePage: React.FC = () => {
  return (
    <AppLayout>
      {/* Categories (Horizontal) */}
      <section className="bg-white border-b border-[var(--color-border)] mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={cat}
                className={`px-5 py-2.5 text-sm rounded-full border transition-all ${
                  idx === 0 
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] font-medium shadow-sm' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Banner Area */}
      <section className="bg-gray-100 h-[300px] flex items-center mb-8 relative group overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full z-10">
          <div className="bg-white/80 backdrop-blur-xs p-8 rounded-2xl max-w-lg border border-white/40 shadow-xl">
            <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full mb-4">
              이달의 특가
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              매일 똑같이 쓰는 재료, <br/>
              MEDiJOB에서 더 <span className="text-[var(--color-secondary)]">스마트</span>하게
            </h1>
            <p className="text-gray-600 mb-6">최고의 의료 자재를 최적의 가격에, 병원 운영에 필요한 모든 것을 원스톱으로 제공합니다.</p>
          </div>
        </div>
        {/* Placeholder Background Abstract */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-light)]/20 to-transparent pointer-events-none" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow mb-20 block">
        {/* Job Grid Area */}
        <section className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">MD 강력 추천 채용공고</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-semibold text-[var(--color-text-main)]">인기순</span>
              <span>|</span>
              <span className="hover:text-[var(--color-primary)] cursor-pointer">최신순</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {MOCK_PRODUCTS.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
            {MOCK_PRODUCTS.map(job => (
              <JobCard key={`${job.id}-dup`} job={{...job, id: `${job.id}-dup`}} />
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};
