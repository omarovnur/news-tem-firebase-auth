<template>
  <div class="home">
    <main class="main columns">
      <section class="column main-column">
        <a
          class="article first-article"
          href="https://www.bbc.com/russian/news-55270007"
          target="_blank"
        >
          <figure class="article-image is-4by3">
            <img
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15AD/production/_115994550_064736207-1.jpg"
              alt=""
            />
          </figure>
          <div class="article-body">
            <h2 class="article-title">
              Журнал Time назвал "человеком года" Джо Байдена и Камалу Харрис
            </h2>
            <p class="article-content">
              Победивший на выборах президента США Джо Байден и будущий
              вице-президент Камала Харрис названы "человеком года" по версии
              журнала Time. В "Твиттере" журнала новость об этом сопровождается
              сообщением: "Человек года" это не только вопрос уходящего года, но
              и вопрос того, куда...
            </p>
            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>

        <a
          class="article"
          href="https://www.bbc.com/russian/news-55239689"
          target="_blank"
        >
          <figure class="article-image is-16by9">
            <img
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/86D7/production/_115991543_80c31fea-25aa-45fa-a068-7eb37c7a45bf.jpg"
              alt=""
            />
          </figure>
          <div class="article-body">
            <h2 class="article-title">
              Эрдоган в Баку: парад победы над Арменией и отголоски Османской
              империи
            </h2>
            <p class="article-content">
              В четверг президент Турции Реджеп Тайип Эрдоган вместе с
              азербайджанским лидером Ильхамом Алиевым принял парад в честь
              победы в войне против Армении...
            </p>
            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>
      </section>

      <section class="column">
        <a
          class="article"
          href="https://www.bbc.com/russian/features-55265860"
          target="_blank"
        >
          <figure class="article-image is-3by2">
            <img
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9CD3/production/_115974104_e23d117c-afc3-48f4-8058-d9315b365d8a.jpg"
              alt=""
            />
          </figure>
          <div class="article-body">
            <h2 class="article-title">
              737 Max возвращается в небо. Наступит ли для Boeing светлая
              полоса?
            </h2>
            <p class="article-content">
              Запреты на полеты Boeing 737 Max начинают отменять - авиалайнеры
              стали выполнять коммерческие рейсы. Это хорошие новости для
              корпорации. Однако ей предстоит еще добиться разрешения на полеты
              в других странах, а также...
            </p>

            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>
        <a
          class="article"
          href="https://www.gismeteo.kz/weather-almaty-5205/"
          target="_blank"
        >
          <div class="article-body">
            <h2 class="article-title">Погода в Алматы:</h2>
            <p class="article-content">Сегодня: -7 &#176;C облачно</p>
            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>
        <a class="article" href="https://mig.kz/" target="_blank">
          <div class="article-body">
            <h2 class="article-title">Курс доллара:</h2>
            <p class="article-content">
              1 доллар США = 418,10 Казахстанский тенге
            </p>
            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>
        <a class="article" href="#">
          <div class="article-body">
            <h2 class="article-title">Hello World</h2>
            <p class="article-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <footer class="article-info">
              <span>By Nurly</span>
              <span>Узнать больше</span>
            </footer>
          </div>
        </a>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
a {
  text-decoration: none;
}

div,
h2,
p,
figure {
  margin: 0;
  padding: 0;
}

.columns {
  display: flex;
}

.column {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.main-column {
  flex: 2;
}

.article {
  background: #dde7df;
  color: #666;
  display: flex;

  flex-direction: column;
  flex-basis: auto;
  margin: 10px;
  height: auto;
}

.article-image {
  background: #eee;
  display: block;
  padding-top: 75%;
  position: relative;
  width: 100%;
  height: auto;
}

.article-image img {
  display: block;
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.article-image.is-4by3 {
  padding-top: 55.6666%;
}

.article-image.is-3by2 {
  padding-top: 56.25%;
}
.article-image.is-16by9 {
  padding-top: 56.25%;
}

.article-body {
  display: flex;

  flex-direction: column;
  padding: 20px;
  height: auto;
}

.article-title {
  color: #333;
  font-family: "Open Sans Condensed", sans-serif;
  flex-shrink: 0;
  font-size: 1.4em;
  height: auto;
  font-weight: 700;
  line-height: 1.2;
}

.article-content {
  font-family: "PT Serif", serif;
  height: auto;
  margin-top: 5px;
}

.article-info {
  font-family: "PT Serif", serif;
  display: flex;
  font-size: 0.85em;
  justify-content: space-between;
  height: auto;
  margin-top: 10px;
}

@media screen and (max-width: 600px) {
  .columns {
    flex-flow: column wrap;
  }
  main {
    font-size: inherit;
  }
}
</style>
