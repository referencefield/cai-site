---
title: CAI Governance Readiness Model
sidebar_label: Readiness Model
slug: /extensions/readiness-model
description: A structural classification model that determines whether governance binds execution by progressively eliminating execution paths for invalid actions.
---

# CAI Governance Readiness Model

## Purpose

This model determines whether governance exists as a precondition of execution.

It does not describe governance programs or organizational maturity.

It evaluates whether governance structurally determines if execution can occur.

## Core Test

At every level, evaluate one condition:

Can a known invalid action execute?

- If YES, the system fails the level
- If NO, the system passes the level

## Model Structure

The model progresses through six levels.

Each level introduces a stricter condition on execution.

Progression is not cumulative description.

It is cumulative elimination of execution paths for invalid actions.

## System Boundary Definition

The system under evaluation must be explicitly defined.

The boundary must include:

- All components required for the action to occur
- All control points where the action could be permitted or blocked
- All alternate execution paths available to the actor

If any execution path exists outside the defined boundary that allows the action:

The system fails classification.

## Boundary Completeness Requirement

The defined system boundary must account for all execution dependencies.

This includes:

- External systems
- Third-party services
- APIs and integrations
- Indirect execution paths
- Shadow or undocumented infrastructure

The evaluator must demonstrate:

- That no execution path exists outside the defined boundary
- That all components capable of enabling the action are included

If any external or unaccounted path exists:

The system fails classification.

## Path Completeness Constraint

Classification applies only to known and observable execution paths.

The evaluator must demonstrate:

- That all execution paths have been enumerated
- That no undocumented or hidden paths are likely to exist

If path completeness cannot be established:

The system fails classification.

## Admissibility Integrity Requirement

Admissibility must be enforced through non-bypassable constraints.

Admissibility does not include:

- Spoofable tokens
- Reversible checks
- Identity claims without verification
- Logic that can be externally manipulated

If admissibility can be bypassed without violating system constraints:

The system fails classification.

## Level 0 - No Binding

### Test

Can an invalid action execute?

### Result

YES

### Failure Reason

No system-level representation of governance exists.

## Level 1 - Post-Execution Awareness

### Test

Can an invalid action execute before detection?

### Result

YES

### Failure Reason

Detection occurs after execution.

## Level 2 - Pre-Execution Evaluation Without Authority

### Test

Can an invalid action execute even after being identified as invalid?

### Result

YES

### Failure Reason

Evaluation exists but does not determine execution.

## Level 3 - Partial Execution Gating

### Test

Are there any execution paths where invalid actions can still occur?

### Result

YES

### Failure Reason

Governance is enforced inconsistently across execution paths.

## Level 4 - Complete Execution Binding

### Test

Can any invalid action execute across all defined execution paths?

### Result

NO

### Failure Reason (if failed)

At least one execution path bypasses admissibility.

## Level 5 - Constraint Invariance During Execution

### Test

Can a valid action transition into an invalid state during execution?

### Result

NO

### Failure Reason (if failed)

Constraints do not persist across state transitions.

## Constraint Invariance Clarification

Constraint invariance requires that constraints remain valid throughout execution.

This includes:

- Asynchronous processes
- Concurrent state changes
- Distributed system updates

If execution can proceed under conditions that invalidate constraints at any point:

The system fails Level 5.

## Required Inputs

Every evaluation must specify:

- Defined invalid action
- Execution path
- Observed system behavior

If any of these are missing, the system defaults to failure.

## Required Output

Every evaluation must produce:

Level Achieved: [0-5]
First Failing Level: [0-5]

Failure Condition:
[Exact test failure]

Bypass Path:
[Where execution escaped governance, if applicable]

## Interpretation Rules

- If ambiguity exists, default to failure
- If evaluators disagree, the system fails the level
- If no invalid action can be defined, the system is Level 0

## Core Principle

The defining transition occurs between Level 2 and Level 3.

At Level 2, governance evaluates execution.

At Level 3 and above, governance determines whether execution exists.

## Structural Function

This model replaces descriptive maturity assessment with executable verification.

It does not ask what governance looks like.

It asks whether invalid actions are structurally impossible.

If invalid actions can occur, governance does not bind execution.

If invalid actions cannot occur, governance exists as a precondition of execution.