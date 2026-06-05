/**
 * Partner Modal — Bilingual (KO / EN)
 */
(function () {
    'use strict';

    const PARTNERS = {
        notion: {
            name: 'Notion',
            subtitle: 'USA · Productivity Platform',
            logo: 'assets/partner-notion.jpg',
            topics: [
                {
                    title: { ko: '엔터프라이즈 B2B 고객 인텔리전스', en: 'Enterprise B2B Customer Intelligence' },
                    desc: {
                        ko: 'AI를 활용해 분산된 B2B 고객 데이터를 통합하고, 전략적 계정 관리를 위한 실행 가능한 인사이트로 전환할 수 있을까요?\n\n한국의 대기업 및 계열사 구조, 의사결정자 정보, 재무공시, 뉴스 기반 세일즈 시그널, CRM 데이터를 연계해 B2B 팀이 핵심 거래처를 더 깊이 이해하고 신규 비즈니스 기회를 발굴할 수 있도록 돕는 솔루션에 관심 있습니다.\n\n탐색 가능한 영역: 기업 계정 인텔리전스, 한국 대기업 그룹 매핑, B2B 컨택 강화, 공시 분석, 재무제표 분석, 뉴스 기반 세일즈 시그널, CRM 강화, AI 고객 리서치',
                        en: 'How can AI help B2B teams unify fragmented enterprise customer data and turn it into actionable insights for strategic account management?\n\nEnterprise B2B customer relationships in Korea are often complex, especially when working with large conglomerates and their subsidiaries. We are interested in solutions that can connect and analyze data from public disclosures, financial statements, news, corporate websites, LinkedIn, CRM systems, and contact databases.\n\nAreas to explore: enterprise account intelligence, Korean conglomerate mapping, B2B contact enrichment, public disclosure analysis, news-based sales signals, CRM enrichment, AI-powered customer research'
                    }
                },
                {
                    title: { ko: 'AI 기반 소프트웨어 데모 영상 제작', en: 'AI-powered Software Product Demo Production' },
                    desc: {
                        ko: 'AI를 활용해 소프트웨어 기업이 전문적이고 브랜드 일관성을 갖춘 제품 데모 영상을 더 적은 수작업으로 제작할 수 있을까요?\n\n제품 데모 영상은 고객 교육, 세일즈 지원, 제품 마케팅에 필수적이지만, 기획·스크립팅·녹화·편집·자막·현지화·배포까지 많은 노력이 필요합니다. 브랜드 톤과 마케팅 목표를 이해하고 전체 워크플로우를 지원하는 솔루션에 관심 있습니다.\n\n탐색 가능한 영역: AI 데모 영상 제작, 소프트웨어 워크스루 생성, 스토리보딩, 자동 편집, AI 보이스오버, 자막, 현지화, 숏폼 영상 재활용',
                        en: 'How can AI help software companies create professional, natural, and brand-consistent product demo videos with less manual effort?\n\nProducing high-quality demos requires significant effort across planning, scripting, recording, editing, captioning, localization, and distribution. We are interested in solutions that understand a company\'s product, brand tone, and marketing goals, then support the full demo creation workflow.\n\nAreas to explore: AI-powered demo video creation, software walkthrough generation, product storytelling, screen recording guidance, automated editing, brand-aware content generation, AI voiceover, captioning, localization, short-form video repurposing'
                    }
                },
                {
                    title: { ko: '브랜드 인지도 & 커뮤니티 시그널 인텔리전스', en: 'Brand Awareness & Community Signal Intelligence' },
                    desc: {
                        ko: 'AI를 활용해 브랜드가 커뮤니티 시그널을 탐지·이해하고 브랜드 인지도, 신뢰, 고객 관계를 강화할 수 있을까요?\n\n브랜드 인식은 소셜 플랫폼, 온라인 커뮤니티, 뉴스레터, 포럼, 리뷰 사이트 등에서 일어나는 대화를 통해 형성됩니다. 브랜드 관련 대화를 모니터링하고, 의미 있는 시그널을 식별해 마케팅·커뮤니티·세일즈·제품 액션으로 전환하는 솔루션에 관심 있습니다.\n\n탐색 가능한 영역: 소셜 리스닝, 커뮤니티 인텔리전스, 감성 분석, 브랜드 시그널 모니터링, 유저 세분화, 개인화 메시지, 리뷰 피드백 추출, 평판 관리',
                        en: 'How can AI help brands detect, understand, and act on community signals to strengthen brand awareness, trust, and customer relationships?\n\nBrand perception is shaped by conversations across social platforms, communities, newsletters, forums, and review sites. We are interested in solutions that monitor brand-related conversations, identify meaningful signals, and translate those insights into marketing, community, sales, and product actions.\n\nAreas to explore: social listening, community intelligence, sentiment analysis, brand signal monitoring, user segmentation, personalized messaging, product feedback extraction, reputation management'
                    }
                }
            ]
        },

        e27: {
            name: 'e27',
            subtitle: 'Singapore · Media & Ecosystem',
            logo: 'assets/partner-e27.jpg',
            topics: [
                {
                    title: { ko: '시니어 기고자 인사이트 수집 자동화', en: 'Frictionless Insight Capture from Senior Contributors' },
                    desc: {
                        ko: 'e27의 500명 이상의 동남아시아 시니어 네트워크(창업자, 투자자, 규제기관, 기업 리더)는 글쓰기라는 높은 진입 장벽 때문에 전문 지식이 충분히 활용되지 못하고 있습니다. 15분 이내의 음성·영상·AI 인터뷰로 인사이트를 수집하고, 동남아시아 지역 억양과 다국어 코드스위칭을 처리하며, 구조화된 소스 자료를 자동으로 생성하는 솔루션에 관심 있습니다. 기여자 승인 워크플로우는 모바일 퍼스트, 건당 2분 이내를 목표로 합니다.',
                        en: 'Our 500-strong network of senior SEA voices has expertise that is under-captured because writing is a high-friction ask. We need tooling that captures insight through voice, video, or AI-conducted interview in under fifteen minutes per session, handles regional accents and multilingual code-switching across SEA contexts, and produces structured source material ready for downstream production. The contributor approval workflow must be mobile-first and take no more than two minutes per piece.'
                    }
                },
                {
                    title: { ko: '원소스 멀티포맷 AI 콘텐츠 생산 파이프라인', en: 'One-Source-to-Many-Formats AI Production Pipeline' },
                    desc: {
                        ko: '단일 소스 인풋(기고자 인터뷰, 패널 녹화, 기사)에서 숏폼 수직 영상, 팟캐스트 클립, 오디오 브리핑, 기사, 뉴스레터, LinkedIn 포스트 시리즈, 인포그래픽 등 10개 이상의 플랫폼 대응 포맷을 자동 생성하는 AI 파이프라인이 필요합니다. 음성·팩트·브랜드 일관성을 유지하면서, 인도네시아어·말레이어·태국어·베트남어·타갈로그어·중국어·영어 등 다국어 현지화도 지원해야 합니다.',
                        en: 'A single source input — a contributor interview, a panel recording, a written piece — should produce ten or more platform-ready outputs: short-form vertical video, podcast clips, audio briefings, article, newsletter blurb, LinkedIn post series, and infographic. We need an AI-powered production pipeline that preserves voice, factual accuracy, and brand standards, and supports multi-language localization across Bahasa Indonesia, Bahasa Malaysia, Thai, Vietnamese, Tagalog, Mandarin, and English, with native-speaker QA possible at scale.'
                    }
                },
                {
                    title: { ko: '플랫폼 네이티브 분산형 배포 에이전트', en: 'Platform-Native Decentralized Distribution' },
                    desc: {
                        ko: '의사결정자들은 LinkedIn, YouTube, TikTok, Spotify, X, Instagram 등 각기 다른 포맷과 알고리즘을 가진 플랫폼에서 콘텐츠를 소비합니다. 각 플랫폼의 네이티브 스펙(수직/수평 영상, 자막, 해시태그 등)에 맞게 자동으로 리포맷·스케줄링·게시·최적화하고, 500명의 기여자 네트워크를 통해 원클릭 공유 및 개인화 포스트 초안을 자동 생성하는 배포 에이전트가 필요합니다.',
                        en: 'Decision-makers consume content across LinkedIn, YouTube, TikTok, Spotify, X, and Instagram, each with distinct format requirements and algorithmic dynamics. We need distribution agents that automatically reformat, schedule, post, and optimize content across these platforms with native specifications — vertical or horizontal video, character limits, thumbnails, hashtag conventions — and coordinate amplification through our 500 contributors with one-click sharing and pre-formatted personal post drafts.'
                    }
                }
            ]
        },

        elevenlabs: {
            name: 'ElevenLabs',
            subtitle: 'UK · AI Voice Technology',
            logo: 'assets/partner-iielevenlabs.jpg',
            topics: [
                {
                    title: { ko: '글로벌 시장 확장을 위한 콘텐츠 현지화', en: 'Content Localization for Global Market Expansion' },
                    desc: {
                        ko: '한국 콘텐츠 크리에이터와 미디어 기업은 고품질 콘텐츠를 제작하지만, 다국어 현지화는 여전히 느리고 비용이 많이 들며 확장하기 어렵습니다. AI 더빙, 보이스 클로닝, 다국어 오디오 제작을 활용해 한국 콘텐츠가 글로벌 시장에 더 빠르게 진출할 수 있도록 돕는 툴 또는 워크플로우를 구축하는 스타트업을 찾습니다. ElevenLabs는 70개 이상의 언어를 원어민 수준의 표현력으로 지원합니다.',
                        en: 'Korean content creators and media companies invest heavily in producing high-quality original content, but localization into other languages remains slow, expensive, and difficult to scale. We are looking for startups building tools or workflows that leverage AI-powered dubbing, voice cloning, or multilingual audio production to help Korean content reach global audiences faster. ElevenLabs supports over 70 languages with native-level expressiveness.'
                    }
                },
                {
                    title: { ko: '고객 대면 애플리케이션을 위한 AI 음성 에이전트', en: 'AI Voice Agents for Customer-Facing Applications' },
                    desc: {
                        ko: '미디어·이커머스·서비스 분야 많은 기업이 여전히 경직된 IVR 시스템이나 텍스트 전용 챗봇에 의존하고 있습니다. 자연스러운 음성 품질과 낮은 지연 시간이 사용자 신뢰와 리텐션에 직결되는 고객 지원 에이전트, 인터랙티브 음성 어시스턴트, 온보딩 플로우를 구축하는 스타트업을 찾습니다. ElevenLabs의 Conversational AI 플랫폼은 1초 미만의 지연 시간으로 실시간 STT·TTS를 지원합니다.',
                        en: 'Many companies in media, e-commerce, and services still rely on rigid, script-based IVR systems or text-only chatbots. We are looking for startups building conversational AI products where natural-sounding, low-latency voice is central to the user experience — customer support agents, interactive voice assistants, or onboarding flows where voice quality directly affects user trust and retention. ElevenLabs\' Conversational AI platform supports real-time STT and TTS with sub-second latency.'
                    }
                },
                {
                    title: { ko: '음성 기반 접근성 및 오디오 콘텐츠 경험', en: 'Voice-Driven Accessibility and Audio Content Experiences' },
                    desc: {
                        ko: '뉴스, 교육, 장문 퍼블리싱 등 방대한 디지털 콘텐츠가 오디오 포맷을 선호하거나 필요로 하는 사용자에게 여전히 닿지 못하고 있습니다. AI 음성 기술을 활용해 텍스트 콘텐츠를 고품질 오디오 경험으로 전환하는 제품을 구축하는 스타트업을 찾습니다. ElevenLabs의 Scribe(STT) 및 TTS 스택은 90개 이상 언어의 전사와 70개 이상 언어의 음성 생성을 지원합니다.',
                        en: 'A significant volume of digital content — news, education, and long-form publishing — remains largely inaccessible to users who prefer or require audio formats. We are looking for startups building products that use AI speech technology to turn text-based content into high-quality audio experiences, whether for accessibility, commuter-friendly consumption, or new audio-first distribution channels. ElevenLabs\' Scribe and TTS stack supports 90+ languages for transcription and 70+ for speech generation.'
                    }
                }
            ]
        },

        sunwah: {
            name: 'Sunwah Inno',
            subtitle: 'Hong Kong · Innovation Center',
            logo: 'assets/partner-sunwah-new.png',
            topics: [
                {
                    title: { ko: '미디어·콘텐츠·엔터테인먼트 스타트업 발굴', en: 'Media, Content & Entertainment Startup Discovery' },
                    desc: {
                        ko: '미디어·게임·OTT·여행 분야 스타트업을 발굴하고 대기업과 연결하는 플랫폼, AI 기반 스타트업 소싱 및 분석, 글로벌 IP 및 콘텐츠 파트너 매칭, 그룹사 연계 오픈이노베이션 관리 시스템에 관심 있습니다. 아시아 콘텐츠 시장을 대상으로 혁신 파이프라인을 구축하는 솔루션을 찾습니다.',
                        en: 'We are interested in platforms that discover and connect startups in media, gaming, OTT, and travel with large enterprises, AI-powered startup sourcing and analysis, global IP and content partner matching, and open innovation management systems linked to group affiliates. We seek solutions that build innovation pipelines targeting the Asian content market.'
                    }
                },
                {
                    title: { ko: '콘텐츠/IP 수익화 및 글로벌 사업화', en: 'Content/IP Monetization & Global Commercialization' },
                    desc: {
                        ko: '콘텐츠 IP 라이선싱 플랫폼, 글로벌 공동제작(Co-production) 매칭, 브랜드 콘텐츠 및 디지털 유통 솔루션, 콘텐츠 수익 분석 및 시장 수요 예측, 권리 관리 및 IP 상용화 인프라에 관심 있습니다. 아시아 시장을 대상으로 한 콘텐츠 사업화 기술을 찾습니다.',
                        en: 'We are interested in content IP licensing platforms, global co-production matching, brand content and digital distribution solutions, content revenue analytics and market demand forecasting, and rights management and IP commercialization infrastructure targeting the Asian market.'
                    }
                },
                {
                    title: { ko: '광고·스폰서십 및 브랜드 파트너십 운영', en: 'Advertising, Sponsorship & Brand Partnership Management' },
                    desc: {
                        ko: '광고·스폰서십 통합 운영 플랫폼, 이벤트·미디어 대상 오디언스 데이터 분석, 브랜드-스폰서 자동 매칭, 광고 성과 측정 및 브랜드 세이프티 관리, 제안서 자동 생성 및 세일즈 지원, 그룹 내 다양한 자산을 연계한 광고 패키지 솔루션에 관심 있습니다.',
                        en: 'We are interested in integrated advertising and sponsorship management platforms, audience data analytics for events and media, automated brand-sponsor matching, ad performance measurement and brand safety management, automated proposal generation, and advertising package solutions that leverage diverse group assets.'
                    }
                }
            ]
        },

        tatler: {
            name: 'Tatler Asia',
            subtitle: 'Asia · Luxury Lifestyle Media',
            logo: 'assets/partner-tatler-new.svg',
            topics: [
                {
                    title: { ko: '콘텐츠·오디언스 소유권·배포 전략', en: 'Content, Audience Ownership & Distribution' },
                    desc: {
                        ko: '(a) 프리미엄 미디어 브랜드가 제3자 소셜 플랫폼 의존도를 줄이고, 고가치 독자와 더 직접적인 퍼스트파티 관계를 구축할 수 있을까요? 오디언스 인텔리전스, 개인화, 뉴스레터/커뮤니티 전환, CRM 강화, 콘텐츠 추천, 소셜→자사 오디언스 유입, 프라이버시 안전 데이터 수집 등의 솔루션에 관심 있습니다.\n\n(b) AI를 활용해 레거시 미디어 브랜드가 기사·사진·영상·프로필·커버·이벤트 취재·문화 IP 등 아카이브 자산의 가치를 새롭게 발굴할 수 있을까요? 아카이브 태깅, 시맨틱 검색, 콘텐츠 재가공, 권리 인식 자산 관리, AI 리서치, 라이선싱, 신규 에디토리얼 상품 개발 등이 포함됩니다.',
                        en: '(a) How can premium media brands reduce dependency on third-party social platforms and build more direct, first-party relationships with high-value audiences? Ideas include audience intelligence, personalization, newsletter/community conversion, CRM enrichment, content recommendation, social-to-owned funnels, and privacy-safe data capture.\n\n(b) How can AI help legacy media brands unlock the value of their archives — editorial, photography, video, profiles, covers, event coverage, and cultural IP — so they become searchable, reusable, monetizable, and relevant for new audiences? This could include archive tagging, semantic search, content repackaging, rights-aware asset management, AI-assisted research, licensing, and new editorial products.'
                    }
                },
                {
                    title: { ko: '커뮤니티 및 글로벌 오디언스 연결', en: 'Community and Cross-Market Engagement' },
                    desc: {
                        ko: '콘텐츠가 커뮤니티를, 커뮤니티가 경험을, 경험이 더 깊은 오디언스 인사이트와 로열티를 만드는 생태계를 구축하는 데 기술이 어떻게 기여할 수 있을까요? AI와 미디어 기술이 아시아 전역의 문화·언어·지역 경계를 넘어 Tatler의 프리미엄 톤, 로컬 감성, 에디토리얼 권위를 유지하면서 연결할 수 있는 방법에 관심 있습니다.',
                        en: 'How can technology help Tatler create an ecosystem where content drives community, community drives experiences, and experiences generate deeper audience insight and loyalty? How can AI and media technology help bridge cultures, languages, and geographies across Asia while maintaining Tatler\'s premium tone, local relevance, and editorial authority?'
                    }
                },
                {
                    title: { ko: '프리미엄 이벤트 & 경험 테크', en: 'Experiences and Event Technology' },
                    desc: {
                        ko: '이벤트 기술이 티켓팅·초청·등록·체크인·룸 배정·오디언스 자격 심사·라이브 인게이지먼트부터 행사 후 클라이언트 리포팅까지, 복잡한 멀티트랙 프리미엄 이벤트를 더 스마트하게 관리하도록 도울 수 있을까요? VIP 경험 최적화와 운영 효율화를 동시에 달성하는 솔루션에 관심 있습니다.',
                        en: 'How can event technology help Tatler manage complex, multi-track premium experiences more intelligently — from ticketing, invitations, registration, check-in, room allocation, audience qualification, and live engagement to post-event client reporting? We are interested in solutions that optimize VIP experiences while improving operational efficiency.'
                    }
                }
            ]
        },

        asiance: {
            name: 'Asiance',
            subtitle: 'Korea · Asia Digital Marketing',
            logo: 'assets/partner-asiance.jpg',
            topics: [
                {
                    title: { ko: 'MarTech·BrandTech 및 오디언스 참여 강화', en: 'MarTech, BrandTech & Audience Engagement' },
                    desc: {
                        ko: '기술이 어떻게 브랜드가 디지털 접점 전반에서 더 강력하고 직접적이며 개인화된 오디언스 관계를 구축하도록 도울 수 있을까요? CRM 활성화, 고객 여정 개인화, 오디언스 세분화, 마케팅 자동화, 소셜→자사 오디언스 전환, 로열티 강화, 퍼스트파티 데이터 수집에 관한 솔루션에 관심 있습니다. 특히 프리미엄·럭셔리 브랜드가 캠페인 중심 커뮤니케이션을 넘어 항상 켜진(always-on) 고객 관계로 나아갈 수 있도록 돕는 솔루션을 찾습니다.',
                        en: 'How can technology help brands build stronger, more direct, and more personalized relationships with their audiences across digital touchpoints? We are interested in CRM activation, customer journey personalization, audience segmentation, marketing automation, social-to-owned audience conversion, loyalty engagement, privacy-safe data capture, and first-party data enrichment. We are especially interested in solutions that help premium and luxury brands move beyond campaign-based communication toward always-on customer relationships.'
                    }
                },
                {
                    title: { ko: 'GEO 및 AI 기반 브랜드 검색 노출 최적화', en: 'GEO and AI-Driven Discoverability' },
                    desc: {
                        ko: '검색이 생성형 AI 엔진의 영향을 점점 더 많이 받는 환경에서 브랜드가 어떻게 가시성·권위·관련성을 유지할 수 있을까요? GEO(생성형 엔진 최적화), AI 검색 가시성, LLM 생성 답변 내 브랜드 노출, AI 친화형 콘텐츠 구조화, 시맨틱 SEO, 지식 그래프 최적화, AI 플랫폼 내 브랜드 모니터링 솔루션에 관심 있습니다.',
                        en: 'How can brands maintain visibility, authority, and relevance in an environment where search is increasingly influenced by generative AI engines? We are interested in startups working on GEO — generative engine optimization — including AI search visibility, brand presence in LLM-generated answers, content structuring for AI discoverability, semantic SEO, knowledge graph optimization, and monitoring tools for brand representation across AI platforms.'
                    }
                },
                {
                    title: { ko: '인플루언서 플랫폼 및 크리에이터 마케팅', en: 'Influencer Platforms & Creator Marketing' },
                    desc: {
                        ko: '기술이 어떻게 브랜드가 적합한 크리에이터를 더 효과적으로 발굴·평가·활성화·측정하도록 도울 수 있을까요? 인플루언서 탐색, 크리에이터-브랜드 매칭, 신뢰도 분석, 사기 탐지, 캠페인 워크플로우, 소셜커머스 연계, 콘텐츠 성과 예측, UGC 관리, ROI 측정 솔루션에 관심 있습니다. 특히 프리미엄 브랜드 세이프티, 로컬 관련성, 아시아 크로스마켓 크리에이터 전략을 지원하는 툴을 찾습니다.',
                        en: 'How can technology help brands identify, evaluate, activate, and measure the right creators more effectively? We are interested in influencer discovery, creator-brand matching, authenticity scoring, fraud detection, campaign workflow management, social commerce integration, content performance prediction, UGC management, and ROI measurement. We are particularly interested in tools supporting premium brand safety, local relevance, and cross-market creator strategies in Asia.'
                    }
                },
                {
                    title: { ko: 'SaaS 마케팅 플랫폼 및 운영 효율화', en: 'SaaS Marketing Platforms & Operational Efficiency' },
                    desc: {
                        ko: 'SaaS 플랫폼이 어떻게 에이전시와 마케팅 팀의 생산성, 캠페인 실행, 클라이언트 리포팅, 멀티마켓 조정을 개선할 수 있을까요? 워크플로우 자동화, 캠페인 기획 툴, 승인 시스템, 현지화 관리, 콘텐츠 캘린더, 자산 관리, CRM 캠페인 오케스트레이션, 리포팅 자동화, 마케팅 운영용 협업 플랫폼 솔루션에 관심 있습니다.',
                        en: 'How can SaaS platforms help agencies and marketing teams improve productivity, campaign execution, client reporting, and multi-market coordination? Relevant solutions include workflow automation, campaign planning tools, approval systems, localization management, content calendars, asset management, CRM campaign orchestration, reporting automation, and collaboration platforms designed for marketing operations.'
                    }
                },
                {
                    title: { ko: 'AI 기반 콘텐츠 제작 및 크리에이티브 자동화', en: 'Innovative Content Production & AI-Assisted Creativity' },
                    desc: {
                        ko: 'AI와 신기술이 브랜드가 고품질의 현지화된 매력적인 콘텐츠를 브랜드 일관성을 유지하면서 대규모로 제작하도록 도울 수 있을까요? AI 카피라이팅, 크리에이티브 현지화, 다이나믹 콘텐츠 생성, 제품 스토리텔링, 자동화된 콘텐츠 재가공, 비주얼 제작, 캠페인 에셋 최적화 솔루션에 관심 있습니다. 프리미엄 브랜드 기준, 다국어 시장, 빠른 콘텐츠 수요를 지원하는 솔루션을 특히 찾습니다.',
                        en: 'How can AI and emerging technologies help brands produce high-quality, localized, and engaging content at scale while maintaining brand consistency? We are interested in AI-assisted copywriting, creative adaptation, localization, dynamic content generation, product storytelling, automated content repackaging, visual production, and campaign asset optimization. We are especially interested in solutions supporting premium brand standards, multilingual markets, and fast-moving content needs.'
                    }
                },
                {
                    title: { ko: 'AI 영상 생성 및 영상 최적화', en: 'AI Video Generation & Video Optimization' },
                    desc: {
                        ko: 'AI가 어떻게 브랜드가 플랫폼과 시장 전반에서 동영상 콘텐츠를 더 효율적으로 제작·적응·개인화·최적화하도록 도울 수 있을까요? AI 영상 생성, 숏폼 영상 변환, 자동 편집, 자막·번역 워크플로우, 영상 개인화, 제품 영상 자동 생성, 성과 기반 A/B 테스트, 크리에이티브 최적화 솔루션에 관심 있습니다.',
                        en: 'How can AI help brands create, adapt, personalize, and optimize video content more efficiently across platforms and markets? Relevant areas include AI video generation, short-form video adaptation, automated editing, subtitle and translation workflows, video personalization, product video creation, performance-based video testing, and creative optimization.'
                    }
                },
                {
                    title: { ko: '마케팅 데이터 분석 및 성과 측정', en: 'Marketing Analytics, Data Intelligence & Performance Measurement' },
                    desc: {
                        ko: '데이터와 AI가 어떻게 브랜드가 마케팅 성과, 오디언스 행동, 비즈니스 임팩트를 더 잘 이해하도록 도울 수 있을까요? 마케팅 분석, 어트리뷰션, 미디어 성과 측정, 고객 인텔리전스, 예측 분석, 대시보드 자동화, 경쟁사 분석, AI 인사이트 생성 솔루션에 관심 있습니다. 파편화된 리포팅에서 실행 가능한 비즈니스 중심 의사결정으로의 전환을 돕는 솔루션을 찾습니다.',
                        en: 'How can data and AI help brands better understand marketing performance, audience behavior, and business impact? We are interested in startups working on marketing analytics, attribution, media performance measurement, customer intelligence, predictive analytics, dashboard automation, competitive intelligence, and AI-powered insight generation. The objective is to help brands move from fragmented reporting to more actionable, business-oriented decision-making.'
                    }
                },
                {
                    title: { ko: '크로스마켓 콘텐츠·커뮤니티·문화 관련성', en: 'Cross-Market Content, Community & Cultural Relevance' },
                    desc: {
                        ko: '기술이 어떻게 브랜드가 문화·언어·시장을 넘나들면서도 로컬 관련성과 프리미엄 톤을 유지하는 콘텐츠와 경험을 만들도록 도울 수 있을까요? 다국어 콘텐츠 현지화, 문화 인텔리전스, 커뮤니티 참여, 시장별 개인화, 지역 트렌드 탐지, 글로벌 전략과 로컬 실행을 연결하는 솔루션에 관심 있습니다. 한국·일본·동남아시아 및 아태 지역에서 운영하는 브랜드에 특히 중요합니다.',
                        en: 'How can technology help brands create content and experiences that travel across cultures, languages, and markets while remaining locally relevant and premium in tone? We are interested in multilingual content adaptation, cultural intelligence, community engagement, market-specific personalization, regional trend detection, and tools that bridge global strategy with local execution. This is particularly important for brands operating across Korea, Japan, Southeast Asia, and the broader Asia-Pacific region.'
                    }
                }
            ]
        },

        moniify: {
            name: 'MONIIFY',
            subtitle: 'UAE · Global Finance Media',
            logo: 'assets/partner-moniify.jpg',
            topics: [
                {
                    title: { ko: 'AI 기반 콘텐츠 운영 자동화', en: 'AI-Powered Content Operations Automation' },
                    desc: {
                        ko: '다수의 소셜 플랫폼에 걸친 엔드투엔드 퍼블리싱 워크플로우를 자동화·최적화하는 AI 기반 콘텐츠 운영 레이어를 찾습니다. Airtable과 연동해 승인된 콘텐츠를 수집하고, 각 에셋에 가장 적합한 플랫폼을 추천하며, 채널별 캡션·해시태그·키워드·메타데이터를 자동 최적화해야 합니다. 과거 성과 데이터, 실시간 플랫폼 트렌드, 프로듀서 인풋을 기반으로 최적 게시 시간을 제안하고, Sprinklr로 최종 콘텐츠를 원활하게 전달하는 시스템이 필요합니다.',
                        en: 'We are looking for an AI-powered content operations layer that automates and optimises the end-to-end publishing workflow across multiple social platforms. The solution should integrate with Airtable to ingest approved content, recommend the most suitable platforms for each asset, and automatically optimise captions, hashtags, keywords, and metadata per channel. It should also suggest optimal posting times based on historical performance, real-time platform trends, and producer input, and seamlessly push finalised content into Sprinklr for publishing.'
                    }
                },
                {
                    title: { ko: 'AI 기반 이중언어 콘텐츠 개인화', en: 'AI-Powered Bilingual Content Personalisation' },
                    desc: {
                        ko: '영어·아랍어 이중언어 플랫폼 전반에서 맞춤형 콘텐츠 경험을 제공하는 AI 기반 개인화 레이어를 찾습니다. 양쪽 오디언스의 사용자 행동 및 참여 패턴을 분석하고, 언어·위치·관심사에 따라 실시간 개인화 콘텐츠 추천을 제공해야 합니다. 홈페이지·뉴스레터 등 주요 페이지를 동적으로 적응시키고, 사용자 여정의 최적 시점에 상황별 CTA를 발동시키는 솔루션이 필요합니다.',
                        en: 'We are looking for an AI-powered personalisation layer that delivers tailored content experiences across our bilingual (English and Arabic) platform. The solution should analyze user behaviour and engagement patterns across both audiences, and use this data to serve real-time, personalised content recommendations based on language, location, and interests. It should dynamically adapt key surfaces such as the homepage and newsletter pages, and trigger contextual CTAs at optimal moments in the user journey.'
                    }
                },
                {
                    title: { ko: 'AI 기반 미디어 에셋 관리 솔루션', en: 'AI-Powered Media Asset Management' },
                    desc: {
                        ko: '업로드 시 자동으로 에셋을 태깅하고, 콘텐츠 유형을 분류하며, 얼굴 인식, 전사(transcript) 생성, 태그·출연자·위치·발화어 기반 검색을 가능하게 하는 AI 기반 미디어 에셋 관리 솔루션을 찾습니다. AWS Glacier 등 딥 아카이브 스토리지와 통합해 아카이브된 에셋도 검색 가능하고 온디맨드로 불러올 수 있어야 하며, Premiere·DaVinci Resolve·Frame.io 등 편집 툴과 연동되어야 합니다.',
                        en: 'We are looking for an AI-powered media asset management solution that automatically tags assets on upload, classifies content type, detects faces, generates transcripts, and makes everything searchable by tag, talent, location, and spoken word. The solution must also integrate with deep archive storage (e.g. AWS Glacier) so archived assets remain searchable with on-demand retrieval, and connect with editing tools like Premiere, DaVinci Resolve, and Frame.io.'
                    }
                }
            ]
        }
    };

    // ── Language toggle state ──────────────────────────────────────────
    let currentLang = 'ko';

    // ── Modal DOM refs ─────────────────────────────────────────────────
    const modal = document.getElementById('partner-modal');
    if (!modal) return;

    const modalLogo     = document.getElementById('modal-logo');
    const modalTitle    = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody     = document.getElementById('modal-body');

    // ── Inject language-toggle button into modal header ───────────────
    (function injectLangToggle() {
        const header = modal.querySelector('.modal__header');
        if (!header) return;
        const btn = document.createElement('button');
        btn.id = 'modal-lang-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label', '언어 전환');
        btn.style.cssText = [
            'position:absolute', 'top:1.25rem', 'right:3.5rem',
            'padding:.25rem .75rem', 'border-radius:999px',
            'border:1.5px solid currentColor', 'background:transparent',
            'font-size:.75rem', 'font-weight:700', 'cursor:pointer',
            'color:inherit', 'letter-spacing:.05em', 'z-index:10',
            'transition:background .2s,color .2s'
        ].join(';');
        btn.textContent = 'EN';
        header.style.position = 'relative';
        header.appendChild(btn);

        btn.addEventListener('click', () => {
            currentLang = currentLang === 'ko' ? 'en' : 'ko';
            btn.textContent = currentLang === 'ko' ? 'EN' : 'KO';
            const key = modal.dataset.partnerKey;
            if (key) renderBody(key);
        });
    })();

    // ── Render helpers ─────────────────────────────────────────────────
    function renderBody(partnerKey) {
        const data = PARTNERS[partnerKey];
        if (!data) return;
        modalBody.innerHTML = '';

        data.topics.forEach((topic, idx) => {
            const topicEl = document.createElement('div');
            topicEl.className = 'modal__topic';

            const titleEl = document.createElement('h4');
            titleEl.className = 'modal__topic-title';
            titleEl.innerHTML = `<span class="modal__topic-num">${String(idx + 1).padStart(2, '0')}</span><span>${escapeHtml(topic.title[currentLang])}</span>`;
            topicEl.appendChild(titleEl);

            const descEl = document.createElement('p');
            descEl.className = 'modal__topic-desc';
            descEl.style.cssText = 'white-space:pre-line;line-height:1.7;font-size:.9rem;color:inherit;opacity:.85;margin-top:.5rem';
            descEl.textContent = topic.desc[currentLang];
            topicEl.appendChild(descEl);

            modalBody.appendChild(topicEl);
        });
    }

    function openModal(partnerKey) {
        const data = PARTNERS[partnerKey];
        if (!data) return;

        modal.dataset.partnerKey = partnerKey;

        modalLogo.src = data.logo;
        modalLogo.alt = data.name;
        modalTitle.textContent = data.name;
        modalSubtitle.textContent = data.subtitle;

        // reset lang to KO on every open
        currentLang = 'ko';
        const btn = document.getElementById('modal-lang-toggle');
        if (btn) btn.textContent = 'EN';

        renderBody(partnerKey);

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();
        const panel = modal.querySelector('.modal__panel');
        if (panel) panel.scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        const anyOpen = document.querySelector('.modal.is-open');
        if (!anyOpen) document.body.classList.remove('modal-open');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ── Event bindings ─────────────────────────────────────────────────
    document.querySelectorAll('[data-partner]').forEach((card) => {
        card.addEventListener('click', () => openModal(card.getAttribute('data-partner')));
    });

    modal.querySelectorAll('[data-modal-close]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
})();
