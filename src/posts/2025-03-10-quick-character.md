---
published: true
title: Quick Character
tags:
  - C#
  - Unity
  - Documentation
date: 2025-03-10
---
\# How I Built Quick Character

Hi, I'm Kadir Lofca, and I'd like to walk you through the process of building **Quick Character**, a flexible and easy-to-use character movement system for Unity. Quick Character is designed to simplify the implementation of high-quality character movement in Unity projects, allowing you to focus more on the game design and less on the complex physics and movement logic.

\### The Problem

When developing games, I often found myself spending too much time creating and refining character movement systems. Whether it was for platformers, action games, or RPGs, I needed a faster way to implement fluid and responsive movement without starting from scratch every time. That’s when the idea for Quick Character came to life.

\### The Solution

Quick Character is a state machine-based framework that handles character movement in a modular way. I designed it to provide Unity developers with a set of simple, plug-and-play components to build and control characters' movements quickly.

\### Key Features of Quick Character

1\. **Character Movement Framework**: At its core, Quick Character provides a base class called `QuickCharacter.cs` that simplifies character movement by controlling transitions between different movement modes (e.g., ground, air, and wall movement).

2\. **Modular Movement States**: The movement is organized into a state machine, allowing for easy addition of new movement behaviors, such as double jumps, wall climbing, and other advanced features.

3\. **Physics Control**: The system uses Unity's `Rigidbody` and `CapsuleComponent` to manage character physics, giving you full control over forces applied during movement.

4\. **Customizable**: Quick Character is highly customizable. You can override key functions like `PhysicsUpdate()` to implement your own movement logic and apply forces based on different movement mediums.

5\. **Input Handling**: While the core system doesn’t handle input directly, it provides a flexible foundation for integrating your own player input controls, like the one demonstrated in `SimpleController.cs`.

\### Structure of Quick Character

Here's how I structured the project:

\- **Core**: Contains the essential scripts (\`QuickCharacter.cs\` and `QuickLibrary.cs`) responsible for the core functionality of the movement system.

\- **Examples**: A folder showcasing examples of different character movement setups, including basic and advanced movement with prefabs like `AdvancedCharacter` and `SimpleCharacter`.

\- **Player Input**: The system works with Unity’s new input system (\`QuickInputActions.inputactions\`), enabling easy player input integration.

\### How Quick Character Works

The heart of Quick Character lies in the `QuickCharacter` class, which serves as a framework for creating your character scripts. Here's a quick overview of the structure:

1\. **Regions and Functions**:

\- **Character Controls**: Public functions that control the character's movement (e.g., walk, jump).

\- **Character Physics**: Functions that apply continuous forces to the `Rigidbody`, such as gravity and jump forces.

\- **Framework**: Functions that handle the underlying system, including state transitions between movement modes like walking, jumping, and wall climbing.

2\. **Character Movement Modes**: By default, Quick Character supports `ground`, `air`, and `wall` movement modes. You can easily extend this by adding more movement types to the `MoveMedium` enum in `QuickLibrary.cs`.

3\. **Input Integration**: Quick Character doesn't directly handle player input but relies on custom input management. I’ve included a basic example with `SimpleController.cs` to demonstrate how to connect player input to character actions.

4\. **Customizing Character Physics**: You can tweak the physics of your character by overriding the `PhysicsUpdate()` function in your custom class derived from `QuickCharacter`. This allows you to control how forces are applied based on the movement state.

\### Getting Started with Quick Character

To get started with Quick Character, follow these steps:

1\. **Create a New Character Script**: Derive your class from `QuickCharacter` and override the necessary methods like `PhysicsUpdate()`. This will set up the basic functionality for your character.

2\. **Handle Player Input**: Use the `SimpleController.cs` as a reference to manage player input and send it to your character class. This allows your character to respond to player commands like walking and jumping.

3\. **Add New Movement Behaviors**: Quick Character makes it easy to add new movement behaviors by extending the `MoveMedium` enum. You can implement unique actions like wall-running or climbing by overriding the `PhysicsUpdate()` method.

4\. **Enhance with Animations**: Once the basic movement is set up, add animations and sounds to make the movement feel more dynamic.

\### Example Scripts and Prefabs

\- **AdvancedCharacter.cs**: This script demonstrates a more advanced setup with features like double jumping and wall climbing. It’s a great starting point if you want to create more complex character movements.

\- **SimpleCharacter.cs**: A minimal example that covers basic walking and jumping. This is perfect if you’re looking to implement a simpler character setup.

\- **Prefabs**: The `AdvancedCharacter.prefab` and `SimpleCharacter.prefab` are ready-to-use character prefabs that you can drop into your Unity scene and start testing right away.

\### Final Thoughts

Quick Character was built with flexibility and ease of use in mind. I wanted to make it as simple as possible for developers to integrate high-quality character movement into their projects. By organizing everything into clear regions and functions, I’ve ensured that the system is both easy to understand and extend.

If you’re looking for a powerful yet simple character movement framework for Unity, I hope Quick Character helps you get your projects moving!

Feel free to reach out to me on Discord if you need any support or have questions.

\- Kadir

**Discord**: `haftaici#0346`