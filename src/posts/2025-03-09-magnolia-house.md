---
published: true
title: Magnolia House
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

As the developer behind this project, **C#**, **Unity**, and **Blender**. My goal was to create an immersive virtual reality experience that would allow users to explore this historic landmark and its significance to African American travelers during the segregation era. The project required both technical skill and a deep respect for the history I was helping to preserve.

## Development Process: Unity and C#

The foundation of the project was built in **Unity**, a powerful game engine that provided me with all the tools I needed to create an interactive VR environment. I used **C#** to script and control the mechanics of the experience, handling everything from player interactions to triggering events as the user navigates through the virtual space.

One of the most important aspects of the development was ensuring that the experience was smooth and responsive in virtual reality. Unity’s integration with C# allowed me to create custom scripts to handle movement, object interactions, and environmental storytelling. I also utilized Unity’s **XR Toolkit** to ensure compatibility across various VR devices, making the experience accessible to a wider audience.

## Modeling and Optimization in Blender

To build the 3D models of the Magnolia House and its surrounding environment, I turned to **Blender**, a powerful open-source 3D modeling tool. The process involved creating detailed, accurate representations of the house, the furniture, and other artifacts from the era. Since this was a historical project, attention to detail was critical to capturing the essence of the space.

Once the models were created, I encountered the challenge of optimizing the 3D assets to ensure the best performance in VR. Detailed models with high polygon counts can easily slow down performance, especially when rendering in real-time VR environments. To address this, I used **decimation techniques** in Blender to reduce the polygon count while maintaining as much visual fidelity as possible. I also used **LOD (Level of Detail) techniques** in Unity, where models with fewer polygons would be used when viewed from a distance.

## Performance Optimization: Culling and More

To further enhance performance and ensure a smooth VR experience, I implemented a series of **culling** methods. Culling is the process of determining which objects in a scene are visible to the player at any given time and which are not. By only rendering objects that are within the player’s view or near their position, I significantly reduced the computational load on the system.

In Unity, I made use of the **frustum culling** feature, which automatically removes objects that are outside of the camera’s field of view. Additionally, I used **occlusion culling**, which allows Unity to not render objects that are blocked by other objects in the scene. This combination of culling methods greatly increased the performance of the project, ensuring that the VR experience ran smoothly without sacrificing visual quality.

Lastly, I implemented **baking** for lighting and shadows in Unity, reducing the need for real-time calculations during the VR experience. By precomputing lighting data, I reduced the strain on the system, which helped maintain a higher frame rate for a more comfortable VR experience.

## Conclusion

Through a combination of careful modeling in **Blender**, efficient scripting in **C#** using **Unity**, and optimization techniques like culling and model reduction, I was able to create a historically accurate and high-performance VR experience for the **Magnolia House project**. It was a challenging but rewarding experience, as I had to balance technical constraints with the need to honor the historical significance of the site. The result is a virtual environment that transports users to a critical moment in American history, all while ensuring a smooth and immersive VR experience.