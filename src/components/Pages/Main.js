import React, { Component } from 'react'

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCoach: null,
      currentTrainingStep: 0
    }
  }

  openCoachPhoto = (src, name) => {
    this.setState({ selectedCoach: { src, name } })
  }

  closeCoachPhoto = () => {
    this.setState({ selectedCoach: null })
  }

  nextTrainingStep = () => {
    this.setState((prevState) => ({
      currentTrainingStep: (prevState.currentTrainingStep + 1) % 4
    }))
  }

  prevTrainingStep = () => {
    this.setState((prevState) => ({
      currentTrainingStep: (prevState.currentTrainingStep + 3) % 4
    }))
  }

  render() {
    const trainingSteps = [
      {
        title: 'Знакомство и беседа',
        icon: 'fas fa-comments',
        image: './img/work/trainkids.jpg',
        text: 'Тренер встретит вас лично. Вы обсудите ваши цели, физические особенности (травмы, ограничения), свободное время и пожелания. Никакой спешки.'
      },
      {
        title: 'Пробное погружение',
        icon: 'fas fa-hand-sparkles',
        image: './img/work/train2.jpg',
        text: 'Если вы еще не выбрали направление, тренер покажет базовые движения таолу, саньда, тайцзи и цигун. Вы попробуете разное и поймете, что ближе именно вам.'
      },
      {
        title: 'Подбор группы',
        icon: 'fas fa-users',
        image: './img/work/train.jpg',
        text: 'По итогам беседы и пробных упражнений тренер порекомендует группу, которая подходит вам по возрасту, уровню и целям. Вы будете заниматься с теми, кто на том же этапе.'
      },
      {
        title: 'Ответы и план',
        icon: 'fas fa-circle-question',
        image: './img/work/alex2.jpg',
        text: 'После занятия вы сможете задать любые вопросы о форме, расписании, абонементах. Тренер предложит план дальнейших занятий - без навязывания.'
      }
    ]
    const activeStep = trainingSteps[this.state.currentTrainingStep]

    return (
      <div className='wrapper2'>
        <div className="allchest">
          {/* HERO-БЛОК */}
          <section className="hero-section position-relative d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1 className="hero-title">
                    Федерация ушу<br />Алтайского края
                  </h1>
                  <p className="hero-subtitle">
                    Сила. Гармония. Традиции. Развитие спортивного ушу в регионе с 2005 года
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <a href="#about" className="btn btn-danger btn-lg rounded-pill px-4">О федерации</a>
                    <a href="#contact" className="btn btn-danger btn-lg rounded-pill px-4">Записаться на занятие!</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-overlay"></div>
          </section>

          <section className="kungfu-quote py-5">
            <div className="container">
              <div className="kungfu-quote-card shadow-sm rounded-4">
                <h5>"То что называется Кунгфу и есть ушу".</h5>
                <p>
                  Это изречение на древнекитайском языке стало предметом обсуждения на первом заседании нового Президиума международной Федерации ушу. Не секрет, что в последнее время предпринимались попытки представить одно из старых названий мастерства в ушу (кунгфу, гунфу) чуть ли не самостоятельным искусством. Были даже попытки использовать этот термин как название для якобы "нового" вида спорта, отличного от ушу. По предложению известного мастера и кинозвезды Джета Ли, президиум международной федерации ушу принял решение использовать термин кунгфу в его прямом историческом контексте: теперь в преамбуле Устава IWUF чётко указано: "Ушу, также называемое Кунгфу". Помимо этого принято решение о том, что теперь, учитывая исторический контекст, чемпионат Мира по традиционным видам ушу будет называться "World Kungfu championships" ("Чемпионат мира по Кунгфу"), а Кунгфу, наряду с таолу, саньда и тайцзицюань стало с этого момента спортивной дисциплиной вида спорта ушу. Информация с сайта ОСОО "ФУР"
                </p>
              </div>
            </div>
          </section>

          {/* О ФЕДЕРАЦИИ И ЦИФРЫ */}
          <section id="about" className="py-5">
            <div className="container">
              <h2 className="section-title text-center mb-4">О нас</h2>
              <p className="text-center text-muted mb-5">
                Миссия — популяризация ушу как вида спорта, воспитание гармоничной личности и спортивного духа. 
                Сохраняем традиции, открыты новым поколениям.
              </p>
              <div className="row g-4">
                <div className="col-md-3 col-6">
                  <div className="stat-card text-center p-4 bg-white shadow-sm rounded-4">
                    <div className="stat-icon display-5 text-danger mb-2"></div>
                    <div className="stat-number fw-bold h2 text-danger">19</div>
                    <div className="stat-label">Рыб</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="stat-card text-center p-4 bg-white shadow-sm rounded-4">
                    <div className="stat-icon display-5 text-danger mb-2"></div>
                    <div className="stat-number fw-bold h2 text-danger">450</div>
                    <div className="stat-label">Рыбов</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="stat-card text-center p-4 bg-white shadow-sm rounded-4">
                    <div className="stat-icon display-5 text-danger mb-2"></div>
                    <div className="stat-number fw-bold h2 text-danger">15</div>
                    <div className="stat-label">Рыб</div>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="stat-card text-center p-4 bg-white shadow-sm rounded-4">
                    <div className="stat-icon display-5 text-danger mb-2"></div>
                    <div className="stat-number fw-bold h2 text-danger">200+</div>
                    <div className="stat-label">Рыб</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* НАПРАВЛЕНИЯ */}
          <section className="py-5 bg-light">
            <div className="container">
              <h2 className="section-title text-center mb-4">Наши направления</h2>
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div
                    className="discipline-card discipline-card--image text-center p-4 bg-white shadow-sm rounded-4 h-100"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.58)), url("/img/roads/taolu.jpg")' }}
                  >
                    <div className="discipline-icon display-4 mb-3"></div>
                    <h5>Таолу</h5>
                    <p>Комплексы формальных упражнений, демонстрация техники, гибкости и акробатики.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="discipline-card discipline-card--image text-center p-4 bg-white shadow-sm rounded-4 h-100"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.58)), url("/img/roads/sanda.jpg")' }}
                  >
                    <div className="discipline-icon display-4 mb-3"></div>
                    <h5>Саньда</h5>
                    <p>Полноконтактное единоборство с контактными ударами, бросками и тактическим мышлением.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="discipline-card discipline-card--image text-center p-4 bg-white shadow-sm rounded-4 h-100"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.58)), url("/img/roads/taizi.jpg")' }}
                  >
                    <div className="discipline-icon display-4 mb-3"></div>
                    <h5>Тайцзицюань</h5>
                    <p> Внутренний стиль ушу, сочетающий боевое применение с медленными, медитативными движениями для укрепления здоровья.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div
                    className="discipline-card discipline-card--image text-center p-4 bg-white shadow-sm rounded-4 h-100"
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.58)), url("/img/roads/tsigun.jpg")' }}
                  >
                    <div className="discipline-icon display-4 mb-3"></div>
                    <h5>Цигун</h5>
                    <p>Дыхательные и энергетические практики, восстановление здоровья и концентрации.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ТРЕНЕРЫ */}
          <section className="py-5">
            <div className="container">
              <h2 className="section-title text-center mb-4">Наши тренеры</h2>
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="coach-card text-center p-4 bg-white shadow-sm rounded-4 h-100">
                    <img
                      src="./img/coaches/alex.jpg"
                      className="coach-img coach-img--clickable rounded-circle mb-3"
                      alt="Алексей Петров"
                      onClick={() => this.openCoachPhoto('./img/coaches/alex.jpg', 'Алексей Петров')}
                    />
                    <h5>Алексей Петров</h5>
                    <p className="text-danger fw-bold small">Глава Федерации Ушу Алтайского края</p>
                    <p>Стаж 22 года, воспитал 6 чемпионов России по таолу.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="coach-card text-center p-4 bg-white shadow-sm rounded-4 h-100">
                    <img
                      src="./img/coaches/roman.jpg"
                      className="coach-img coach-img--clickable rounded-circle mb-3"
                      alt="Чуканов Роман"
                      onClick={() => this.openCoachPhoto('./img/coaches/roman.jpg', 'Чуканов Роман')}
                    />
                    <h5>Чуканов Роман</h5>
                    <p className="text-danger fw-bold small">КМС, чемпион края 2019</p>
                    <p>Тренер сборной Алтайского края по саньда.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="coach-card text-center p-4 bg-white shadow-sm rounded-4 h-100">
                    <img
                      src="./img/coaches/romanZ.jpg"
                      className="coach-img coach-img--clickable rounded-circle mb-3"
                      alt="Зайковский Роман"
                      onClick={() => this.openCoachPhoto('./img/coaches/romanZ.jpg', 'Зайковский Роман')}
                    />
                    <h5>Зайковский Роман</h5>
                    <p className="text-danger fw-bold small">Чемпион России по тайцзицюань</p>
                    <p> Тренер по цигун и кунгфу Шаолиня «Заповедное Искусство»</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="coach-card text-center p-4 bg-white shadow-sm rounded-4 h-100">
                    <img
                      src="./img/coaches/anton.jpg"
                      className="coach-img coach-img--clickable rounded-circle mb-3"
                      alt="Антонов Антон"
                      onClick={() => this.openCoachPhoto('./img/coaches/anton.jpg', 'Антонов Антон')}
                    />
                    <h5>Антонов Антон</h5>
                    <p className="text-danger fw-bold small">МС, призёр Кубка России по таолу</p>
                    <p> Тренер по цигун терапии, тайцзи и туйшоу, боевым искусства и практикам для жизни</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {this.state.selectedCoach && (
            <div className="coach-modal" onClick={this.closeCoachPhoto}>
              <button className="coach-modal-close" onClick={this.closeCoachPhoto} aria-label="Закрыть">
                x
              </button>
              <img
                src={this.state.selectedCoach.src}
                alt={this.state.selectedCoach.name}
                className="coach-modal-img"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <section id="first-training" className="py-5 bg-light-custom">
            <div className="container">
              <div className="section-title"><span>Как проходит первая тренировка</span></div>
              <div className="section-subtitle">Мы понимаем, что начинать новое волнительно. Нажимайте на стрелки и посмотрите, как будет проходить ваш первый визит.</div>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="step-card bg-white rounded-4 shadow-sm training-step-card overflow-hidden">
                    <img src={activeStep.image} className="w-100 training-step-image" alt={activeStep.title} />
                    <div className="p-4 p-md-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <button className="step-nav-btn" onClick={this.prevTrainingStep} aria-label="Предыдущий шаг">←</button>
                        <div className="step-number">{this.state.currentTrainingStep + 1}</div>
                        <button className="step-nav-btn" onClick={this.nextTrainingStep} aria-label="Следующий шаг">→</button>
                      </div>
                      <h5><i className={`${activeStep.icon} me-2 text-gold`}></i>{activeStep.title}</h5>
                      <p className="text-muted mb-2">{activeStep.text}</p>
                      <p className="text-muted small mb-0">Шаг {this.state.currentTrainingStep + 1} из {trainingSteps.length}</p>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <a href="#contact" className="btn btn-primary">Записаться на пробное занятие</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* СОБЫТИЯ */}
          <section className="py-5 bg-light">
            <div className="container">
              <h2 className="section-title text-center mb-4">Ближайшие события</h2>
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="event-card p-4 bg-white shadow-sm rounded-4">
                    <div className="event-date fw-bold text-danger mb-2">15–17 мая 2026</div>
                    <h5>Чемпионат Сибири по ушу</h5>
                    <p className="text-muted">Барнаул, ДС «Победа»</p>
                    <a href="#events" className="btn btn-sm btn-danger rounded-pill">Подробнее</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="event-card p-4 bg-white shadow-sm rounded-4">
                    <div className="event-date fw-bold text-danger mb-2">3 июня 2026</div>
                    <h5>Семинар по тайцзицюань</h5>
                    <p className="text-muted">Зал федерации, Ленинградская 7б</p>
                    <a href="#events" className="btn btn-sm btn-danger rounded-pill">Регистрация</a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="event-card p-4 bg-white shadow-sm rounded-4">
                    <div className="event-date fw-bold text-danger mb-2">22–24 августа 2026</div>
                    <h5>Открытый Кубок Алтая по саньда</h5>
                    <p className="text-muted">Спорткомплекс «Эланс»</p>
                    <a href="#events" className="btn btn-sm btn-danger rounded-pill">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* НОВОСТИ */}
          <section className="py-5">
            <div className="container">
              <h2 className="section-title text-center mb-4">Новости федерации</h2>
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="news-card p-4 bg-white shadow-sm rounded-4">
                    <h5>Победа на чемпионате России</h5>
                    <p className="text-muted">Спортсмены федерации завоевали 3 золотых и 2 серебряных медали в Казани.</p>
                    <small className="text-secondary">29.03.2025-
                    04.04.2025</small>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="news-card p-4 bg-white shadow-sm rounded-4">
                    <h5>Отделение в Бийске</h5>
                    <p className="text-muted">Новый филиал федерации начинает набор детей с 7 лет.</p>
                    <small className="text-secondary">02.04.2026</small>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="news-card p-4 bg-white shadow-sm rounded-4">
                    <h5>Мастер-класс от легенд</h5>
                    <p className="text-muted">Приглашённые тренеры из Китая проведут семинар в июне.</p>
                    <small className="text-secondary">28.03.2026</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* КОНТАКТЫ И ЗАПИСЬ */}
          <section id="contact" className="py-5 bg-dark text-white">
            <div className="container">
              <h2 className="section-title contact-title text-center mb-4">Запишитесь на пробное занятие бесплатно!</h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control form-control-lg rounded-pill" placeholder="Ваше имя" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control form-control-lg rounded-pill" placeholder="Телефон" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control form-control-lg rounded-pill" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select form-select-lg rounded-pill">
                        <option selected>Выберите направление</option>
                        <option>Таолу</option>
                        <option>Саньда</option>
                        <option>Тайцзицюань</option>
                        <option>Цигун</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control form-control-lg rounded-4" rows="3" placeholder="Дополнительные пожелания :) (необязательно)"></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-danger btn-lg rounded-pill px-5">Отправить заявку</button>
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <p className="mb-1">г. Барнаул, Ленинградская 7б, спорткомплекс «Горизонт», 3 этаж</p>
                    <p className="mb-1">+8(3852)533-832 | wushu-as@mail.ru</p>
                    <div className="social-icons mt-2">
                      <a href="#" className="text-white me-3"><i className="fab fa-vk"></i></a>
                      <a href="#" className="text-white me-3"><i className="fab fa-telegram"></i></a>
                      <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Main