---
title: Calendrier
icon: fa-calendar
order: 4
auto-header: none
---

<!-- trouve tous les mois dans le planning  et boucle dessus -->
{% assign all_months = site.data.schedule |  map: "month" | uniq %}
{% for a_month in all_months %}

<!-- imprime le titre de mois -->
<div class="row row-striped">
  <div class="col-12 text-center">
    <h2>- {{ a_month }} -</h2>
  </div>
</div>

<!-- trouve tous les creneaux du mois et boucle dessus -->
{% assign all_slots_in_month = site.data.schedule |  where:"month",a_month %}

{% for a_slot in all_slots_in_month %}

<!-- trouve le template de cours correspondant (renvoie un tableau d'ou la boucle fictive sur tmp_class ) -->
{% assign tmp_class = site.data.classtypes |  where:"id",a_slot.classtype %}
{% assign a_class = tmp_class.first %}


<div class="row row-striped">
  <div class="col-2 text-right">
    <h2><span class="badge badge-secondary">{{ a_slot.date }}</span></h2>
  </div>
  <div class="col-10">
    <h3 class="text-left">{{ a_class.name }}</h3>
    <ul class="list-inline text-left">
        <li class="list-inline-item"><i class="fa fa-calendar" aria-hidden="true"></i> {{ a_class.day }}</li>
      <li class="list-inline-item"><i class="fa fa-clock" aria-hidden="true"></i> {{ a_class.timing }}</li>
      <li class="list-inline-item">{% if a_class.mapslink.size > 0 %}<a href="{{ a_class.mapslink }}" target="_blank">{% endif %}<i class="fa fa-location-arrow" aria-hidden="true"></i> {{ a_class.location }}{% if a_class.mapslink.size > 0 %}</a>{% endif %}</li>
      {% if a_class.bookinglink.size > 0 %}<li class="list-inline-item"><a href="{{ a_class.bookinglink }}" target="{{ a_class.bookingtarget }}"><i class="fa fa-plus" aria-hidden="true"></i> S'inscrire</a></li>{% endif %}
    </ul>
  </div>
</div>

{% endfor %}


<hr class="major" />
{% endfor %}
