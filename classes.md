---
layout: page
title: Les Cours
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1>Les Cours</h1>
		</header>

    {% for aclass in site.data.classes %}

    <hr class="major" />
    <div class="row">
        <div class="3u 12u$(medium)"> <!-- gauche-->
          <h3>{{ aclass.name }}</h3>
          <a href="{{ aclass.bookinglink }}" class="button small" target="{{ aclass.bookingtarget }}">Réserver</a>
        </div>
        <div class="7u 12u$(medium)"> <!-- milieu-->
          <h3>{{ aclass.timetable }}</h3>
          <p>{{ aclass.description}}</p>
          <p>{{ aclass.location }}<br>
          <a href="{{ aclass.mapslink }}" target="_blank">Comment venir?</a></p>

        </div>
        <div class="2u 12u$(medium)"> <!-- droite-->
          <span class="image fit"><img src="{{ site.baseurl }}/{{ aclass.logo }}" alt="" /></span>
        </div>



    </div><!--row-->
    {% endfor %}


  </div><!--inner-->
</section><!--one-->
</div><!--main-->
