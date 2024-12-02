---
title: "Work"
permalink: "/pages/work/"
layout: "work.njk"  # This must match the filename exactly
css: "/css/second.css"
slug: work
_template: Page


---

<div class="flex-item">
  {% for post in collections.posts %}
    {% if post.data.tags and post.data.tags.includes("artwork") %}
      <div class="artwork-post">
        <h3>
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h3>

        {% if post.data.heroImage %}
          <img src="{{ post.data.heroImage }}" alt="Hero Image for {{ post.data.title }}" style="width: 100%; height: auto;" />
        {% endif %}

        <div>{{ post.templateContent | safe }}</div>
      </div>
    {% endif %}
  {% endfor %}
  {% if collections.posts | length == 0 %}
    <p>No artwork posts found.</p>
  {% endif %}
</div>
