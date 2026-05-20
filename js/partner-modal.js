/**
 * Partner Modal
 * Click on a partner card to open modal with detailed collaboration topics.
 */
(function () {
    'use strict';

    // Collaboration topics per partner (from 기업별 참여문서 텍스트.pdf)
    const PARTNERS = {
        notion: {
            name: 'Notion',
            subtitle: 'USA · Productivity Platform',
            logo: 'assets/partner-notion.jpg',
            topics: [
                {
                    title: '콘텐츠 운영 및 에디토리얼 워크플로우',
                    items: [
                        '콘텐츠 기획부터 발행까지 통합 운영',
                        '에디토리얼 캘린더 자동화',
                        '리뷰·승인 프로세스 관리',
                        'CMS 및 SNS 발행 시스템 연동',
                        '브랜드 톤앤매너 관리',
                        '콘텐츠 제작 조직의 협업 효율화'
                    ]
                },
                {
                    title: '마케팅 및 캠페인 운영 인텔리전스',
                    items: [
                        '캠페인 기획·운영·성과 분석 통합 관리',
                        '광고 플랫폼 데이터 자동 연동',
                        '크리에이티브 자산 관리',
                        '에이전시·클라이언트 협업 워크플로우',
                        'A/B 테스트 기록 및 분석 관리',
                        '캠페인 결과 기반 학습 자동화'
                    ]
                },
                {
                    title: '게임 스튜디오 및 라이브 서비스 운영',
                    items: [
                        '게임 개발 문서·위키 관리',
                        '패치노트 및 릴리즈 운영',
                        '유저 피드백 수집 및 분석',
                        '라이브 운영 일정 관리',
                        '게임 조직 내 협업 및 지식관리',
                        '개발·운영·커뮤니티 조직 간 협업 효율화'
                    ]
                },
                {
                    title: 'OTT·여행 콘텐츠 운영 및 로컬라이징',
                    items: [
                        '대규모 콘텐츠 파이프라인 관리',
                        '콘텐츠 메타데이터 및 태깅 자동화',
                        '다국어 콘텐츠 로컬라이징',
                        '콘텐츠 권리 및 라이선스 관리',
                        '여행·OTT 콘텐츠 데이터베이스 구조화',
                        '지역·타겟 기반 콘텐츠 수요 분석'
                    ]
                }
            ]
        },
        e27: {
            name: 'e27',
            subtitle: 'Singapore · Media & Ecosystem',
            logo: 'assets/partner-e27.jpg',
            topics: [
                {
                    title: '커뮤니티 데이터 기반 개인화 및 추천 고도화',
                    items: [
                        '스타트업·투자자·기업 회원 데이터를 활용한 맞춤형 콘텐츠 추천',
                        '사용자 행동 기반 관심사 분석 및 세분화',
                        '콘텐츠·이벤트 참여 기반 개인화 경험 제공',
                        '독자를 실제 커뮤니티 멤버로 전환할 수 있는 데이터 기반 솔루션',
                        '실시간 개인화 및 관심사 그래프(Interest Graph) 구축 기술'
                    ]
                },
                {
                    title: '스타트업 생태계 매칭 및 딜 인텔리전스',
                    items: [
                        '스타트업·투자자·기업 간 AI 기반 매칭 솔루션',
                        '투자/채용/사업 시그널 기반 딜 소싱 기술',
                        'CRM 데이터 강화 및 스마트 필터링',
                        'Warm Introduction 및 관계 형성 자동화',
                        '스타트업 커뮤니티 내 고가치 연결 효율화 기술'
                    ]
                },
                {
                    title: '이벤트 데이터 및 커뮤니티 라이프사이클 관리',
                    items: [
                        '오프라인 이벤트와 온라인 플랫폼 연계 솔루션',
                        '행사 참가자 행동 데이터 분석',
                        '이벤트 이후 커뮤니티 유지 및 리드 육성',
                        '하이브리드 이벤트 참여 경험 개선',
                        '이벤트 참가자를 장기 플랫폼 회원으로 전환하는 기술'
                    ]
                }
            ]
        },
        elevenlabs: {
            name: 'ElevenLabs',
            subtitle: 'UK · AI Voice Technology',
            logo: 'assets/partner-iielevenlabs.jpg',
            topics: [
                {
                    title: '다국어 AI 음성·영상 콘텐츠 현지화',
                    items: [
                        'AI 더빙 및 음성 현지화 워크플로우',
                        '립싱크 및 음성 품질 개선 기술',
                        '방언·언어별 음성 커스터마이징',
                        '콘텐츠 로컬라이징 프로젝트 관리',
                        '글로벌 콘텐츠의 아시아 시장 현지화',
                        '한국 및 아시아 콘텐츠의 글로벌 확장 지원'
                    ]
                },
                {
                    title: '기업용 Voice AI Agent 및 고객경험 혁신',
                    items: [
                        '자연스러운 대화형 Voice AI Agent 구축',
                        'CRM·상담 시스템 연동',
                        '다국어 고객 응대 솔루션',
                        'AI Agent 품질 모니터링',
                        '브랜드 맞춤형 음성 Persona 설계',
                        '비개발 조직도 쉽게 운영 가능한 Voice AI 인프라'
                    ]
                },
                {
                    title: 'AI 음성 기반 콘텐츠 수익화',
                    items: [
                        'AI 음성 기반 콘텐츠 플랫폼',
                        '오디오 기사·팟캐스트·캐릭터 음성 서비스',
                        'Creator용 음성 수익화 솔루션',
                        '인터랙티브 오디오 콘텐츠',
                        'AI Voice 라이선싱 플랫폼',
                        '오디오 접근성 및 멀티언어 확장 기술'
                    ]
                }
            ]
        },
        moniify: {
            name: 'MONIIFY',
            subtitle: 'UAE · Global Finance Media',
            logo: 'assets/partner-moniify.jpg',
            topics: [
                {
                    title: 'Gen Z·밀레니얼 대상 금융 콘텐츠 추천 및 유입 최적화',
                    items: [
                        '숏폼 기반 금융 콘텐츠 개인화',
                        '스크롤 및 소비 패턴 분석',
                        '관심사 기반 콘텐츠 피드 구성',
                        '금융 트렌드 및 이슈 탐지',
                        'TikTok·Instagram·YouTube 등 SNS 유입 최적화',
                        '단순 방문자를 충성 사용자로 전환하는 솔루션'
                    ]
                },
                {
                    title: '글로벌 크리에이터 및 콘텐츠 운영 효율화',
                    items: [
                        '글로벌 크리에이터 네트워크 운영 관리',
                        'AI 기반 콘텐츠 제작 및 편집 지원',
                        '다국어 콘텐츠 퍼블리싱',
                        '크리에이터 성과 분석 대시보드',
                        '콘텐츠 캘린더 및 워크플로우 자동화',
                        '브랜드 품질 및 일관성 관리 솔루션'
                    ]
                },
                {
                    title: '콘텐츠 수익화 및 유료 전환 모델',
                    items: [
                        '유료 멤버십 및 커뮤니티 플랫폼',
                        '동적 페이월 및 프리미엄 콘텐츠 전환',
                        '이벤트·마스터클래스 티켓 운영 솔루션',
                        '마이크로 결제 기반 콘텐츠 모델',
                        '사용자 리텐션 및 로열티 강화 메커니즘',
                        'Gen Z 친화형 콘텐츠 수익화 모델'
                    ]
                }
            ]
        },
        sunwah: {
            name: 'Sunwah Group',
            subtitle: 'Hong Kong · IT & Digital',
            logo: 'assets/partner-sunwah.jpg',
            topics: [
                {
                    title: '미디어·콘텐츠·엔터테인먼트 스타트업 발굴',
                    items: [
                        '미디어·게임·OTT·여행 분야 스타트업 발굴 플랫폼',
                        'AI 기반 스타트업 소싱 및 분석',
                        '대기업-스타트업 협업 연결 솔루션',
                        '글로벌 IP 및 콘텐츠 파트너 매칭',
                        '그룹사 연계 오픈이노베이션 관리 시스템',
                        '아시아 콘텐츠 시장 대상 혁신 파이프라인 구축'
                    ]
                },
                {
                    title: '콘텐츠/IP 수익화 및 글로벌 사업화',
                    items: [
                        '콘텐츠 IP 라이선싱 플랫폼',
                        '글로벌 공동제작(Co-production) 매칭',
                        '브랜드 콘텐츠 및 디지털 유통 솔루션',
                        '콘텐츠 수익 분석 및 시장 수요 예측',
                        '권리 관리 및 IP 상용화 인프라',
                        '아시아 시장 대상 콘텐츠 사업화 기술'
                    ]
                },
                {
                    title: '광고·스폰서십 및 브랜드 파트너십 운영',
                    items: [
                        '광고·스폰서십 통합 운영 플랫폼',
                        '이벤트·미디어 대상 Audience Data 분석',
                        '브랜드-스폰서 자동 매칭',
                        '광고 성과 측정 및 브랜드 세이프티 관리',
                        '제안서 자동 생성 및 세일즈 지원',
                        '그룹 내 다양한 자산 연계형 광고 패키지 솔루션'
                    ]
                }
            ]
        },
        tatler: {
            name: 'Tatler Asia',
            subtitle: 'Asia · Luxury Lifestyle Media',
            logo: 'assets/partner-tatler.jpg',
            topics: [
                {
                    title: '콘텐츠·오디언스·배포 전략 고도화',
                    items: [
                        '(1) 퍼스트파티 오디언스 구축',
                        'SNS 플랫폼 의존도 감소',
                        '고가치 독자 대상 CRM 강화',
                        '뉴스레터 및 커뮤니티 전환',
                        '콘텐츠 추천 및 개인화',
                        '퍼스트파티 데이터 수집',
                        '오디언스 인텔리전스 기반 고객 이해',
                        '(2) AI 기반 콘텐츠 아카이브 활용',
                        '기사·사진·영상·이벤트 아카이브 검색 최적화',
                        '콘텐츠 태깅 및 시맨틱 검색',
                        '콘텐츠 재가공 및 재활용',
                        'IP 및 자산 관리 솔루션',
                        'AI 기반 리서치 및 스토리텔링',
                        '콘텐츠 라이선싱 및 신규 수익화 모델'
                    ]
                },
                {
                    title: '커뮤니티 및 글로벌 오디언스 연결',
                    items: [
                        '콘텐츠 기반 커뮤니티 구축',
                        '커뮤니티 기반 경험(Experience) 설계',
                        '고객 인사이트 및 로열티 강화',
                        '아시아 시장 간 문화·언어 연결 기술',
                        '지역별 로컬 감성과 프리미엄 브랜드 톤 유지',
                        '글로벌-로컬 콘텐츠 전략 연결 솔루션'
                    ]
                },
                {
                    title: '프리미엄 이벤트 및 Experience Tech',
                    items: [
                        '티켓·초청·등록 시스템 고도화',
                        '행사 체크인 및 운영 자동화',
                        'VIP·Audience Qualification 관리',
                        '다중 세션·멀티트랙 행사 운영 기술',
                        '현장 참여 및 Engagement 솔루션',
                        '행사 후 클라이언트 리포팅 자동화',
                        '프리미엄 이벤트 데이터 분석 및 운영 효율화'
                    ]
                }
            ]
        },
        asiance: {
            name: 'Asiance',
            subtitle: 'Korea · Asia Digital Marketing',
            logo: 'assets/partner-asiance.jpg',
            topics: [
                {
                    title: 'MarTech·BrandTech 및 고객 참여 강화',
                    items: [
                        'CRM 기반 고객 관계 활성화',
                        '고객 여정(Customer Journey) 개인화',
                        '타겟 고객 세분화 및 마케팅 자동화',
                        'SNS 유입 고객의 자사 플랫폼 전환',
                        '로열티 및 리텐션 강화 솔루션',
                        '퍼스트파티 데이터 수집 및 활용',
                        '프리미엄·럭셔리 브랜드 대상 고객 경험 강화 기술'
                    ]
                },
                {
                    title: 'GEO 및 AI 기반 브랜드 검색 노출 최적화',
                    items: [
                        '생성형 AI 검색(GEO) 최적화 기술',
                        'LLM 기반 검색 결과 내 브랜드 노출 관리',
                        'AI 친화형 콘텐츠 구조화',
                        '시맨틱 SEO 및 Knowledge Graph 최적화',
                        'AI 플랫폼 내 브랜드 모니터링',
                        '생성형 검색 환경 대응 브랜드 가시성 강화 솔루션'
                    ]
                },
                {
                    title: '인플루언서 및 크리에이터 마케팅 플랫폼',
                    items: [
                        '인플루언서 탐색 및 Creator-Brand 매칭',
                        '크리에이터 신뢰도 및 Authenticity 분석',
                        '가짜 트래픽·팔로워 탐지(Fraud Detection)',
                        '캠페인 운영 및 워크플로우 관리',
                        '소셜커머스 연계 솔루션',
                        'UGC 관리 및 성과 예측',
                        'ROI 기반 크리에이터 성과 측정'
                    ]
                },
                {
                    title: 'SaaS 기반 마케팅 운영 효율화',
                    items: [
                        '캠페인 운영 자동화',
                        '승인 및 협업 워크플로우 관리',
                        '다국가·다언어 캠페인 운영 지원',
                        '콘텐츠 캘린더 및 자산 관리',
                        'CRM 캠페인 오케스트레이션',
                        '마케팅 리포팅 자동화',
                        '글로벌 마케팅 조직 협업 플랫폼'
                    ]
                },
                {
                    title: 'AI 기반 콘텐츠 제작 및 크리에이티브 자동화',
                    items: [
                        'AI 카피라이팅 및 콘텐츠 생성',
                        '크리에이티브 현지화(Local Adaptation)',
                        '다국어 콘텐츠 제작',
                        '제품 스토리텔링 자동화',
                        '콘텐츠 재가공 및 재배포 솔루션',
                        '비주얼 제작 및 캠페인 에셋 최적화',
                        '프리미엄 브랜드 톤앤매너 유지 기술'
                    ]
                },
                {
                    title: 'AI 영상 생성 및 영상 최적화',
                    items: [
                        'AI 영상 생성 및 편집 자동화',
                        '숏폼 영상 변환 및 최적화',
                        '자막·번역 워크플로우 자동화',
                        '개인화 영상 제작',
                        '상품·브랜드 영상 자동 생성',
                        '영상 성과 기반 A/B 테스트',
                        '영상 크리에이티브 최적화 솔루션'
                    ]
                },
                {
                    title: '마케팅 데이터 분석 및 성과 측정',
                    items: [
                        '마케팅 성과 분석 및 Attribution',
                        '고객 행동 및 Audience Intelligence 분석',
                        '예측 분석(Predictive Analytics)',
                        '마케팅 대시보드 자동화',
                        '경쟁사 분석 및 인사이트 생성',
                        'AI 기반 성과 리포팅',
                        '데이터 기반 의사결정 지원 솔루션'
                    ]
                },
                {
                    title: '글로벌 콘텐츠 및 문화 기반 로컬라이징',
                    items: [
                        '다국어 콘텐츠 현지화',
                        '문화·시장별 트렌드 분석',
                        '지역 맞춤형 개인화 콘텐츠',
                        '글로벌 브랜드의 로컬 실행 지원',
                        '커뮤니티 기반 고객 참여 강화',
                        '한국·일본·동남아 시장 대상 콘텐츠 전략 기술'
                    ]
                }
            ]
        }
    };

    const modal = document.getElementById('partner-modal');
    if (!modal) return;

    const modalLogo = document.getElementById('modal-logo');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody = document.getElementById('modal-body');

    function openModal(partnerKey) {
        const data = PARTNERS[partnerKey];
        if (!data) return;

        modalLogo.src = data.logo;
        modalLogo.alt = data.name;
        modalTitle.textContent = data.name;
        modalSubtitle.textContent = data.subtitle;

        // Build topics
        modalBody.innerHTML = '';
        data.topics.forEach((topic, idx) => {
            const topicEl = document.createElement('div');
            topicEl.className = 'modal__topic';

            const titleEl = document.createElement('h4');
            titleEl.className = 'modal__topic-title';
            titleEl.innerHTML = `<span class="modal__topic-num">${String(idx + 1).padStart(2, '0')}</span><span>${escapeHtml(topic.title)}</span>`;
            topicEl.appendChild(titleEl);

            const listEl = document.createElement('ul');
            listEl.className = 'modal__topic-list';
            topic.items.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                listEl.appendChild(li);
            });
            topicEl.appendChild(listEl);

            modalBody.appendChild(topicEl);
        });

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Focus close button for accessibility
        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();

        // Reset scroll
        const panel = modal.querySelector('.modal__panel');
        if (panel) panel.scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        const anyOpen = document.querySelector('.modal.is-open');
        if (!anyOpen) {
            document.body.classList.remove('modal-open');
        }
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Card click handlers
    document.querySelectorAll('[data-partner]').forEach((card) => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-partner');
            openModal(key);
        });
    });

    // Close handlers - scoped to partner modal only
    modal.querySelectorAll('[data-modal-close]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
})();
