---
title: "Database Replication: Leaders and Followers"
description: "A short note on the shape of a replicated write path."
pubDate: 2026-10-30
tags:
  - Databases
  - Architecture
draft: false
---

A leader-based database sends writes through one authoritative node and streams the resulting changes to followers. It is a useful model because it makes write ordering explicit.

The interesting design questions are usually not about the happy path: how much replica lag is acceptable, when a read must go to the leader, and what happens when the leader disappears?
