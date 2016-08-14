---
layout: post
title: Why Sun is the center of our solar system
date: '2014-07-02 22:44:44 -0400'
comments: true
categories:
  - Solar System
  - Javascript
  - Simulation
abbrlink: e0efd72f
---

Because our Earth is in a system called Solar System.
I don't think the answer would be simple as that.
Why the Earth could not be the center?

Actually it could.
As we learn in physic, all motions are relative, like we feel we are still on the Earth, but we actually spin and orbit the Sun.
Moreover, we orbit the Sun, in another words that the Sun also orbits us.
This doesn't conflict with motion relative law.
But why we are not saying the Sun is orbiting Earth?
<!-- more -->
So let's see how the planets move during heliocentric system and geocentric system.
Here is the link: [SolarSystem.js](http://noahdragon.github.io/SolarSystem.js/).
You could click to switch the systems, and draw the orbit path for better viewing.

The heliocentric system shows perfect concentric circles of planets path, in contrast, the geocentric system looks like random motion.
Untile we draw their path, only the Sun's orbit is circle, the other planet tracks are like spiral.
After long enough years, the orbit will look like below picture:

<img src="{{ root_url }}/images/pics/geocentric.jpg" alt="Geocentric system orbits"/>

It's totally mess!

This simulated program assumes the planets' orbit is circle and in the same surface.
In our real solar system, it is way more complicate.

I didn't do the history research about why heliocentrism won the theory battle.
But I know heliocentrism is better because it is simpler.
This also aligns with the philosophy of Unix/Linux programming:
K.I.S.S., which stands for "Keep It Simple & Straightforward".

Because of heliocentric system, we make satellite launch possible, and easily calculate the planets position.
Otherwise, I couldn't image how hard the job is for a mathematician to compute the correct route from the Earth to Mars.
