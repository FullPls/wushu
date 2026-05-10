import React, { Component } from 'react'
import Header from "D:/Сайт/shop/src/components/Footer";
import Footer from "D:/Сайт/shop/src/components/Footer";

export class Main extends Component {
  render() {
	return (
		<main>
		<div className="allchest">
			<div className="upperchest">
				<div className="container">
					
				</div>
			</div>
			<br/>
			<div className="chest">
				<div className="container">
					<div className="obj">
						<h2>Объявления</h2>
						<ol>
							<li>Продается костюм на мальчика</li>
							<li>Пошив костюмов</li>
							<li>Потерялся меч</li>
							<li>Продаем инвентарь</li>
							<li>Подготовка к соревнованиям</li>
						</ol>
					</div>
					<div className="inf">
						<h2>Добро пожаловать</h2>
						<h4>
							<img className="infi"src="img/gongfu.jpg"/></h4>
						<h5>"То что называется Кунгфу и есть ушу".</h5>
						Это изречение на древнекитайском языке стало предметом обсуждения на первом заседании нового Президиума международной Федерации ушу. Не секрет, что в последнее время предпринимались попытки представить одно из старых названий мастерства в ушу (кунгфу, гунфу) чуть ли не самостоятельным искусством. Были даже попытки использовать этот термин как название для якобы "нового" вида спорта, отличного от ушу. По предложению известного мастера и кинозвезды Джета Ли, президиум международной федерации ушу принял решение использовать термин кунгфу в его прямом  историческом контексте: теперь в преамбуле Устава  IWUF чётко указано: "Ушу, также называемое Кунгфу". Помимо этого принято решение о том, что теперь, учитывая исторический контекст, чемпионат Мира по традиционным видам ушу будет называться "World Kungfu championships" ("Чемпионат мира по Кунгфу"), а Кунгфу, наряду с таолу, саньда и тайцзицюань стало с этого момента спортивной дисциплиной вида спорта ушу. Информация с сайта ОСОО "ФУР"
					</div>
					<div className="partners">
						<h2>Партнеры</h2>
						<a target="_blank" href="https://barnaul.press/">
							<img className="partnersIMG"src="img/partners/ВБ.jpg"/>
						</a>
					</div>
				</div>
			</div>
			<br/>
		</div>
		</main>
	)
  }
}

export default Main