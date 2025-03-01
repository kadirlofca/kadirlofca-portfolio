---
published: true
title: Quick Character
slug: quick-character
description: A framework to define video game character movement states.
subdomains: swe, game
tags: C#, Unity, Software Design, Documentation
date: 2022-12-10
---
With this project I learned about designing a system, writing readable code, and supporting users through documentation.

> I love playing movement games such as Titanfall, Apex, Mirror's Edge, and tinkering with game engines trying to replicate their movements. Quick Character is a framework I made where developers define their movement logic without having to deal with how that logic interacts with other character states.

## Project Structure

Quick Character consists of 3 folders:

*   **Core:** All the necessary code.
    
*   **Examples:** Demonstrations.
    
*   **Resources:** Other files such as documentation and logo.
    

All code is sorted in a dependencies-first manner. For example:

```
        // SetMedium() is written after OnMediumChangeInternal() because it depends on it.
        private void OnMediumChangeInternal(MoveMedium oldMedium)
        {
            // Some code here.
        }

        private void SetMedium(MoveMedium newMedium)
        {
            OnMediumChangeInternal(oldMedium);
            // Rest of code.
        }
```

This helps with my goal of having an excellent developer experience by logically sorting functions.

## State Machine

I designed a system where the character can only be in one movement state at any given time. The developer simply defines functions to be called for each movement state.

```
        // Snippet from AdvancedCharacter.cs
        // Functions are called inside the switch statement, applying appropriate forces onto the character body.
        // FindNextMedium() is called to calculate next frame's medium.
        protected override MoveMedium PhysicsUpdate()
        {
            switch (medium)
            {
                case MoveMedium.ground:
                    ApplyFloorMovement(gait);
                    break;

                case MoveMedium.air:
                    ApplyGravity(descendingGravity, ascendingGravity);
                    ApplyAirControlMovement(airControl);
                    ApplyAirMovement(rb.velocity.XZ().magnitude.Map(airAccelBoostThreshold, 0, 0, airAcceleration));
                    ApplyDrag(drag);
                    break;

                default:
                    return MoveMedium.air;
            }

            return FindNextMedium();
        }
```