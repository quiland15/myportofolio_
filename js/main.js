;(function () {
	
	'use strict';
	
	var translations = {
		id: {
			'switcher.label': 'Bahasa',
			'switcher.download': 'Unduh CV',
			'hero.role': '<span>BackEnd Developer & FrontEnd Developer</span>',
			'hero.description': 'Menggabungkan pengalaman freelance dengan praktik engineering modern—CI/CD, type-safe codebase, dokumentasi, dan komunikasi asynchronous—untuk siap bergabung dengan tim global dari hari pertama.',
			'hero.ctaProjects': 'Lihat Proyek',
			'hero.ctaContact': 'Hubungi Saya',
			'about.heading': 'Tentang Saya',
			'about.title': 'Halo!',
			'about.p1': 'Saya fokus pada frontend dan mobile development (React, TypeScript, React Native, TailwindCSS) dengan praktik yang sama seperti lingkungan startup global: code review, linting otomatis, dokumentasi singkat, dan komunikasi async yang jelas.',
			'about.p2': 'Freelance project seperti website perusahaan dan sistem kasir UD Pelita membuat saya terbiasa memimpin diskusi kebutuhan bisnis, merancang arsitektur data sederhana, hingga merilis fitur secara iteratif.',
			'about.listRemote': '<strong>Siap remote:</strong> bekerja full-time dengan overlap 4–6 jam untuk zona waktu Asia/Australia/Eropa.',
			'about.listLanguage': '<strong>Bahasa kerja:</strong> komunikasi Inggris/Indonesia, dokumentasi teknis dalam bahasa Inggris.',
			'about.listTooling': '<strong>Tooling:</strong> GitHub, Linear/Jira, Notion, Slack/Teams, dan CI/CD sederhana via GitHub Actions.',
			'about.p3': 'Target saya adalah memberikan hasil yang measurable (peningkatan efisiensi, pengalaman pengguna, atau waktu rilis) pada setiap kolaborasi, meskipun dimulai dari studi kasus pribadi.',
			'about.download': 'Unduh CV Lengkap',
			'resume.heading': 'Ringkasan Pengalaman',
			'resume.subheading': 'Saya mengerjakan inisiatif freelance dan proyek pribadi yang meniru kebutuhan bisnis nyata—sistem pengumpulan data, website brand, dan aplikasi mobile—untuk membuktikan bisa memberikan value sejak minggu pertama.',
			'resume.workHeading': 'Pengalaman Kerja',
			'resume.video.title': 'Video Editor (Freelance)',
			'resume.video.company': 'Video Promosi Bengkel Mobil - Juni 2024',
			'resume.video.body': 'Menyusun naskah, mengambil, dan mengedit video promosi untuk meningkatkan visibilitas bengkel mobil serta menarik pelanggan baru, sekaligus memastikan layanan bengkel tersampaikan dengan visual yang kuat.',
			'resume.data.title': 'Data Analyst (Freelance)',
			'resume.data.company': 'Proyek Pemilu & Pemerintahan - Februari 2024',
			'resume.data.body': 'Mengumpulkan dan merapikan data pemilih DPRD/Wali Kota menggunakan Microsoft Excel, membangun rumus untuk mempercepat analisis, lalu menyiapkan laporan guna mendukung pengambilan keputusan tim lapangan.',
			'resume.excel.title': 'Excel Specialist (Freelance)',
			'resume.excel.company': 'Proyek Pemilu & Pemerintahan - November 2024',
			'resume.excel.body': 'Merancang template dan formula Excel untuk mempermudah manajemen data pilkada serta memastikan laporan yang dikirim tim sesuai standar akurasi yang diminta pihak penyelenggara.',
			'resume.mobile.title': 'Mobile Developer (React Native)',
			'resume.mobile.company': 'Personal Project - 2024 – Sekarang',
			'resume.mobile.body': 'Membangun aplikasi internal untuk katalog & kasir UD Pelita memakai React Native, dengan navigasi bertahap, autentikasi ringan, serta integrasi Firebase Realtime Database agar stok bisa dipantau real time.<br>Menulis komponen ulang ke TypeScript demi memastikan codebase aman ketika kolaborasi remote.<br>Menyusun catatan desain singkat supaya handover ke engineer lain lebih cepat.',
			'resume.frontend.title': 'Frontend Developer',
			'resume.frontend.company': 'UD Pelita (Proyek Freelance) - 2023',
			'resume.frontend.body': 'Mengembangkan website profil perusahaan beserta dashboard kasir menggunakan React + Tailwind.<br>Merancang komponen reusable, integrasi API sederhana, dan layout mobile-first agar informasinya mudah diakses tim operasional.<br>Menghubungkan dashboard ke Firebase untuk sinkronisasi data transaksi dan inventori.',
			'resume.educationHeading': 'Pendidikan',
			'resume.education.title': 'Sarjana Ilmu Komputer',
			'resume.education.company': 'Universitas Klabat - 2021 - Sekarang',
			'resume.education.body': 'Sedang menyelesaikan studi S1 Ilmu Komputer dengan fokus pada pemrograman, pengembangan perangkat lunak, dan dasar infrastruktur cloud.',
			'services.heading': 'Layanan',
			'services.backend.title': 'Backend Developer',
			'services.backend.body': 'Membangun API dan layer database yang aman serta scalable, dengan fokus pada dokumentasi endpoint yang rapi dan workflow deploy yang mudah dirawat tim kecil.',
			'services.cloud.title': 'Cloud Server',
			'services.cloud.body': 'Mengatur dan men-deploy infrastruktur cloud (AWS/GCP) sederhana untuk kebutuhan staging/production, termasuk pengaturan environment variable, storage, dan pemantauan dasar.',
			'services.frontend.title': 'FrontEnd',
			'services.frontend.body': 'Mendesain dan membangun antarmuka responsif berbasis React + TypeScript, lengkap dengan integrasi API, state management ringan, dan konsistensi UI di berbagai ukuran layar.',
			'skills.heading': 'Skills',
			'projects.heading': 'Proyek & Studi Kasus',
			'projects.intro': 'Semua proyek di bawah ini bersumber langsung dari repositori GitHub saya. Walaupun belum dirilis publik, tiap studi kasus meniru tantangan yang sering ditemui tim engineering global.',
			'projects.whyTitle': 'Kenapa relevan untuk perusahaan luar?',
			'projects.point1': 'Menerapkan navigasi terstruktur, pola autentikasi, dan integrasi database layaknya aplikasi produksi.',
			'projects.point2': 'Seluruh komponen ditulis ulang ke TypeScript untuk menjaga type-safety saat kolaborasi lintas zona waktu.',
			'projects.point3': 'Menyiapkan otomatisasi linting (ESLint, Prettier) dan unit test dasar agar mudah disambungkan ke pipeline CI/CD.',
			'projects.viewRepo': 'Lihat repository',
			'projects.more': 'Saya terus menambahkan studi kasus baru (dashboard React + Tailwind, backend API Node/Express). Hubungi saya untuk daftar lengkap atau sesi demo.',
			'cta.heading': 'Hire Me!',
			'cta.body': 'Mari kita ubah kebutuhan Anda menjadi solusi yang memenuhi ekspektasi sekaligus memberi dampak nyata bagi bisnis.',
			'cta.button': 'Hubungi Saya',
			'contact.heading': 'Kontak',
			'contact.firstName': 'Nama depan Anda',
			'contact.lastName': 'Nama belakang Anda',
			'contact.email': 'Alamat email Anda',
			'contact.subject': 'Subjek pesan',
			'contact.message': 'Tulis pesan Anda',
			'contact.submit': 'Kirim Pesan',
			'contact.note': 'Klik tombol akan membuka aplikasi email bawaan Anda.',
			'contact.defaultSubject': 'Pesan baru dari portofolio'
		},
		en: {
			'switcher.label': 'Language',
			'switcher.download': 'Download CV',
			'hero.role': '<span>Full-Stack Web & Mobile Developer</span>',
			'hero.description': 'Blending freelance experience with modern engineering habits—CI/CD, type-safe codebases, documentation, and async communication—to contribute to global teams from day one.',
			'hero.ctaProjects': 'See Projects',
			'hero.ctaContact': 'Contact Me',
			'about.heading': 'About Me',
			'about.title': 'Hello!',
			'about.p1': 'I focus on front-end and mobile development (React, TypeScript, React Native, TailwindCSS) while applying the same rituals you find in modern startups: code reviews, automated linting, concise docs, and clear async updates.',
			'about.p2': 'Freelance work like UD Pelita’s website and cashier system trained me to lead requirement discussions, design lightweight data architecture, and ship iteratively.',
			'about.listRemote': '<strong>Remote-ready:</strong> available full-time with 4–6 hours overlap for Asia/Australia/Europe time zones.',
			'about.listLanguage': '<strong>Working languages:</strong> English/Bahasa Indonesia with technical documentation in English.',
			'about.listTooling': '<strong>Tooling:</strong> GitHub, Linear/Jira, Notion, Slack/Teams, plus lightweight CI/CD via GitHub Actions.',
			'about.p3': 'My goal is to deliver measurable outcomes—better efficiency, UX, or release speed—even when a project starts as a personal case study.',
			'about.download': 'Download Full CV',
			'resume.heading': 'Experience At A Glance',
			'resume.subheading': 'I take on freelance and personal initiatives that mirror real business needs—data collection systems, branded websites, and mobile apps—to prove I can ship value from week one.',
			'resume.workHeading': 'Work Experience',
			'resume.video.title': 'Video Editor (Freelance)',
			'resume.video.company': 'Car Workshop Promotional Videos - June 2024',
			'resume.video.body': 'Scripted, shot, and edited promotional videos to boost awareness for a car repair shop, showcasing services with concise storytelling and visuals.',
			'resume.data.title': 'Data Analyst (Freelance)',
			'resume.data.company': 'Election & Governance Projects - February 2024',
			'resume.data.body': 'Collected and organized voter data in Microsoft Excel, built formulas to speed up analysis, and delivered reports that guided on-the-ground decisions.',
			'resume.excel.title': 'Excel Specialist (Freelance)',
			'resume.excel.company': 'Election & Governance Projects - November 2024',
			'resume.excel.body': 'Designed Excel templates and formulas to simplify local election reporting while keeping accuracy aligned with regulatory standards.',
			'resume.mobile.title': 'Mobile Developer (React Native)',
			'resume.mobile.company': 'Personal Project - 2024 – Present',
			'resume.mobile.body': 'Built an internal catalog & cashier app for UD Pelita with React Native, navigation, lightweight auth, and Firebase Realtime Database for live inventory.<br>Refactored components to TypeScript to keep the codebase safe for distributed collaboration.<br>Documented a mini design system so handovers stay fast.',
			'resume.frontend.title': 'Frontend Developer',
			'resume.frontend.company': 'UD Pelita (Freelance Project) - 2023',
			'resume.frontend.body': 'Developed the corporate site and cashier dashboard with React + Tailwind.<br>Created reusable components, simple API integrations, and mobile-first layouts for operations teams.<br>Linked the dashboard to Firebase for synchronized transactions and stock data.',
			'resume.educationHeading': 'Education',
			'resume.education.title': 'Bachelor of Computer Science',
			'resume.education.company': 'Klabat University - 2021 - Present',
			'resume.education.body': 'Pursuing a B.Comp.Sc. with coursework spanning programming, software engineering, and cloud fundamentals.',
			'services.heading': 'My Services',
			'services.backend.title': 'Backend Developer',
			'services.backend.body': 'Build secure, scalable APIs and database layers with clean documentation and deployment workflows fit for lean teams.',
			'services.cloud.title': 'Cloud Server',
			'services.cloud.body': 'Set up pragmatic AWS/GCP environments for staging/production, covering env vars, storage, and basic monitoring.',
			'services.frontend.title': 'Front-end',
			'services.frontend.body': 'Design and implement responsive React + TypeScript interfaces with API integrations, light state management, and consistent UI across devices.',
			'skills.heading': 'Skills',
			'projects.heading': 'Projects & Case Studies',
			'projects.intro': 'Every project below links directly to my GitHub repositories. Even without public releases, each case study recreates challenges real engineering teams face.',
			'projects.whyTitle': 'Why it matters for global teams',
			'projects.point1': 'Implements structured navigation, authentication, and database integrations comparable to production apps.',
			'projects.point2': 'Rewrites components into TypeScript to guarantee type safety when collaborating across time zones.',
			'projects.point3': 'Ships with ESLint, Prettier, and baseline unit tests to plug into CI/CD quickly.',
			'projects.viewRepo': 'View repository',
			'projects.more': 'I keep adding new case studies (React + Tailwind dashboard, Node/Express API). Reach out for the full list or a live walkthrough.',
			'cta.heading': 'Ready to Collaborate',
			'cta.body': 'Let’s turn your roadmap into a solution that meets expectations and creates measurable business impact.',
			'cta.button': 'Contact Me',
			'contact.heading': 'Contact',
			'contact.firstName': 'Your first name',
			'contact.lastName': 'Your last name',
			'contact.email': 'Your email address',
			'contact.subject': 'Subject',
			'contact.message': 'Type your message',
			'contact.submit': 'Send Message',
			'contact.note': 'Clicking the button opens your default email client.',
			'contact.defaultSubject': 'New message from portfolio'
		}
	};

	var getSavedLanguage = function() {
		try {
			return localStorage.getItem('siteLang') || 'id';
		} catch (err) {
			return 'id';
		}
	};

	var persistLanguage = function(lang) {
		try {
			localStorage.setItem('siteLang', lang);
		} catch (err) {
			// ignore storage errors (e.g., private mode)
		}
	};

	var currentLang = getSavedLanguage();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var applyTranslations = function(lang) {
		var locale = translations[lang] ? lang : 'id';
		currentLang = locale;
		persistLanguage(locale);
		$('body').removeClass('lang-id lang-en').addClass('lang-' + locale);
		$('.lang-btn').removeClass('active');
		$('.lang-btn[data-lang="' + locale + '"]').addClass('active');
		$('[data-i18n]').each(function() {
			var key = $(this).data('i18n');
			var text = translations[locale][key];
			if (text !== undefined) {
				$(this).html(text);
			}
		});
		$('[data-i18n-placeholder]').each(function() {
			var key = $(this).data('i18n-placeholder');
			var text = translations[locale][key];
			if (text !== undefined) {
				$(this).attr('placeholder', text);
			}
		});
		$('[data-i18n-value]').each(function() {
			var key = $(this).data('i18n-value');
			var text = translations[locale][key];
			if (text !== undefined) {
				$(this).val(text);
			}
		});
	};

	var languageSwitcher = function() {
		$('.lang-btn').on('click', function() {
			var lang = $(this).data('lang');
			if (lang && lang !== currentLang) {
				applyTranslations(lang);
			}
		});
	};

	var contactForm = function() {
		var $form = $('#contact-form');
		if (!$form.length) {
			return;
		}

		$form.on('submit', function(e) {
			e.preventDefault();

			var firstName = ($('#fname').val() || '').trim();
			var lastName = ($('#lname').val() || '').trim();
			var email = ($('#email').val() || '').trim();
			var defaultSubject = (translations[currentLang] && translations[currentLang]['contact.defaultSubject']) || 'New message from Portfolio';
			var subject = ($('#subject').val() || defaultSubject).trim();
			var message = ($('#message').val() || '').trim();
			var recipient = $form.data('recipient') || 'quiland86@gmail.com';

			if (!email || !message) {
				alert('Please fill in your email and message before sending.');
				return;
			}

			var fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || 'Anonymous';
			var bodyLines = [
				'Name: ' + fullName,
				'Email: ' + email,
				'',
				'Message:',
				message
			];

			var mailto = 'mailto:' + encodeURIComponent(recipient) +
				'?subject=' + encodeURIComponent(subject) +
				'&body=' + encodeURIComponent(bodyLines.join('\n'));

			window.location.href = mailto;
		});
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
		languageSwitcher();
		applyTranslations(currentLang);
		contactForm();
	});


}());