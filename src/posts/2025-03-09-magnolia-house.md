---
published: true
title: "Magnolia House 🚶‍♀️‍➡️ 🏡 "
description: The official virtual reality tour of the Historic Magnolia House on
  the Meta Quest 2.
tags:
  - C#
  - Unity
  - Meta Quest 2
  - Shaders
  - Spacial Audio
date: 2025-03-09
---
I had the opportunity to bring the history of the Magnolia House to life in virtual reality. The goal of this project was to showcase the rooms where famous visitors of the Magnolia House stayed in.

As the only developer behind this project, I had to fill multiple roles. I used **C#** and **Unity**, for the programming part of the project, and **Blender, Affinity Designer, SketchUp, Audacity** for other parts. My goal as the developer was to create an immersive experience that would allow users to feel the significance of this historic house. Aside from technical skill, this project required strong communication skills to set project requirements, deadlines, and expectations with the client.

## Development Process

The foundation of the project was built in the **Unity** game engine. I used **C#** to script the mechanics of the experience - everything from player movement and interactions to logic behind the spacial audio and visuals.

One of the most important requirements of this experience was mitigating motion sickness - the sick feeling caused by motion seen through VR not matching your senses. This required a ton of manual testing by putting the VR headset on and walking through the house. I had to tweak the movement speed, rotation speed, teleportation animation, and even the visuals of the environment to help reduce motion sickness. The result was a success!

## Optimizations

Apart from our mentors, my only colleague in this project was an interior design student, who took measurements of the house and analyzed blueprints to create an accurate 3D model of it, and handed the model to me. However, the usual requirements of an interior designers 3D models and a VR application are drastically different, and so, I would have to optimize the project by 50% to reach the 90FPS target.

I started by using Unity's profiling tool to see what was causing low frames. I noticed the amount of triangles being rendered was above a few million!!! When I first saw this, I thought the model was just unoptimized for VR hardware, so I went into **Blender** and started removing unnecessary triangles - ones that are redundant and ones that the user would never see. After my changes to the model, I used the profiling tool again and although there was an improvement, there was still a long way to go...

After doing some testing and trying to understand the cause of low frames, I found out something about Unity. I assumed Unity had culling tools enabled by default, and I was wrong. Almost all triangles from the 3D model was being rendered every single frame - even ones that the user shouldn't be able to see!! I quickly implemented frustum culling to hide away triangles that the user couldn't see, and the frames reached our target 😁

## Conclusion

Through a combination of careful optimization and efficient scripting in **C#** using **Unity**, I was able to create a historically accurate and high-performance VR experience for the **Magnolia House project -** in under 3 months. It was a challenging but rewarding experience, as I had to balance technical constraints with the need to reduce motion sickness. The result is a virtual environment that transports users to a critical moment in American history, all while ensuring a smooth and immersive VR experience.