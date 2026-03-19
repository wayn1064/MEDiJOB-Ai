import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">MEDiJOB-Ai</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              AI 기반 지능형 병원/의원 재료 종합 쇼핑몰.<br />
              필요한 모든 소모품과 장비를 가장 빠르고 정확하게 공급합니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>1588-0000</li>
              <li>평일 09:00 - 18:00</li>
              <li>점심 12:00 - 13:00</li>
              <li>주말/공휴일 휴무</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">WAYN-Ai 통합 생태계</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[var(--color-primary)]">DENTi-Ai (치과 자동화)</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">LOGiS-Ai (유통 자동화)</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">MEDiJOB-Ai (구인구직)</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} WAYN-Ai Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
