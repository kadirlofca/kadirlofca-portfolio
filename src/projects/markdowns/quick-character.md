---
published: true
title: Quick Character
slug: quick-character
description: A framework to define video game character movement states.
subdomains: swe, game
tags: '"C#, Unity, Software Design, Documentation"'
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
        private void OnMediumChangeInternal(MoveMedium oldMedium)
        {
            ...
        }

        private void ForceMediumForDuration(int nFramesDuration, MoveMedium forcedMedium)
        {
            forcedMediumFrames = Mathf.Max(nFramesDuration, 0);
            SetMedium(forcedMedium);
        }

        private void SetMedium(MoveMedium newMedium)
        {
            MoveMedium oldMedium = medium;
            medium = newMedium;
            OnMediumChangeInternal(oldMedium);
            OnMediumChange(oldMedium);
        }
```