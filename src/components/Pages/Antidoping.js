import React from 'react'

export const Antidoping = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Антидопинг</h2>
        <div className="mx-auto" style={{ maxWidth: '920px' }}>
          <div className="p-4 p-md-5 bg-white rounded-4 shadow-sm">
            <p className="lead mb-3">
              Федерация поддерживает принципы чистого спорта, честной конкуренции и здоровья спортсменов.
            </p>
            <ul className="text-muted mb-4">
              <li>Использование запрещенных субстанций и методов недопустимо.</li>
              <li>Каждый спортсмен несет персональную ответственность за то, что попадает в его организм.</li>
              <li>Перед применением любых лекарств и БАД необходимо проверять их статус в актуальных перечнях.</li>
              <li>Тренеры и родители несовершеннолетних спортсменов обязаны участвовать в антидопинговом просвещении.</li>
            </ul>
            <p className="mb-2 fw-semibold">Полезные официальные ресурсы:</p>
            <p className="mb-1">
              РУСАДА:{' '}
              <a href="https://rusada.ru" target="_blank" rel="noreferrer">
                https://rusada.ru
              </a>
            </p>
            <p className="mb-0">
              WADA:{' '}
              <a href="https://www.wada-ama.org" target="_blank" rel="noreferrer">
                https://www.wada-ama.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

