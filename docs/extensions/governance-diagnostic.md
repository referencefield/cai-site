---
title: CAI Governance Diagnostic Tool
sidebar_label: Diagnostic Tool
slug: /extensions/governance-diagnostic
description: A deterministic diagnostic that tests whether governance exists as a precondition of execution by evaluating whether invalid actions can occur within a system.
---

# CAI Governance Diagnostic Tool

## Purpose

This diagnostic determines whether governance exists as a precondition of execution.

It does not assess policy quality, documentation completeness, or risk posture.

It evaluates one condition only:

Can invalid actions occur within the system?

## Section 1 - Define the Test Case

Before evaluation, a single invalid action must be defined.

### Required

- Action description
- Why it is invalid
- Applicable rule or constraint
- System in which it occurs

### Format

Invalid Action:
[Describe the action]

Invalid Because:
[State the violated constraint]

Execution Path:
[Describe how the action would occur]

## Test Case Sufficiency Requirement

The defined invalid action must be representative of a class of invalid actions.

The evaluator must demonstrate:

- That the selected action is not uniquely hard-coded
- That similar invalid actions would be subject to the same constraints
- That no alternate invalid action class exists that bypasses enforcement

If this cannot be demonstrated:

The system fails classification.

This requirement applies within the defined system boundary specified in Section 2. Demonstrable coverage of the action class within that boundary satisfies this requirement.

## Section 2 - System Boundary Definition

The system under evaluation must be explicitly defined.

The boundary must include:

- All components required for the action to occur
- All control points where the action could be permitted or blocked
- All alternate execution paths available to the actor

If any execution path exists outside the defined boundary that allows the action:

The system fails classification.

## Section 3 - Execution Test

Evaluate the system using the defined invalid action.

### Q1

Can the action execute?

- YES
- NO

If Q1 = NO, proceed to Q4 and Q5 to determine whether Level 4 or Level 5 applies. Q1 = NO alone does not establish the level.

### Q2

If YES, when is the violation detected?

- After execution
- During execution
- Before execution

### Q3

If detected before execution, can the action still proceed?

- YES
- NO

### Q4

Are there alternate paths where the same action can still execute?

- YES
- NO

### Q5

If initially valid, can the action become invalid during execution?

- YES
- NO

## Section 4 - Classification Logic

### Level 0

Condition:

- Q1 = YES
- No detection or evaluation exists

### Level 1

Condition:

- Q1 = YES
- Detection occurs after execution

### Level 2

Condition:

- Q1 = YES
- Detection occurs before execution
- Q3 = YES

### Level 3

Condition:

- Q3 = NO
- Q4 = YES

### Level 4

Condition:

- Q3 = NO
- Q4 = NO

### Level 5

Condition:

- Q4 = NO
- Q5 = NO

## Section 5 - Required Output

Every diagnostic must produce:

Level Achieved: [0-5]
First Failing Level: [0-5]

Failure Condition:
[Exact test failure]

Bypass Path:
[Where execution escaped governance, if applicable]

Constraint Drift:
[If Q5 = YES, describe how validity changed during execution]

## Section 6 - Interpretation Rules

- If any ambiguity exists, default to failure
- If multiple evaluators disagree, system fails the level
- If an invalid action cannot be clearly defined, system is Level 0

This rule applies to all evaluation stages including test case definition, system boundary definition, and execution test questions.

## Section 7 - Disallowed Substitutes

The following do not count as governance:

- Documentation
- Audit logs
- Monitoring systems without enforcement
- Human review after execution
- Alerts without enforcement

## Clarification on Monitoring and Enforcement

Monitoring is not disallowed.

Monitoring without enforcement is not governance.

If monitoring directly triggers a non-bypassable block on execution:

It is considered enforcement.

## Core Function

This diagnostic forces a single determination:

Show whether an invalid action can or cannot occur.

If it can occur, governance does not bind execution.

If it cannot occur, governance exists as a precondition of execution.

***

CAI-Regulatory-Crosswalk-v2.protondoc

# CAI Regulatory Crosswalk

## Purpose

This document evaluates major governance frameworks against a single condition:

Can a known invalid action execute within a system that fully complies with the framework?

If yes, governance does not bind execution.

This is not a comparison of concepts.

It is a test of execution reality.

## Method

Each framework is evaluated using the same structure:

- Defined invalid action
- Compliant system behavior
- Execution outcome
- Failure point
- CAI counterfactual

The test condition is constant:

Can the invalid action execute?

## Methodological Constraint

This evaluation assumes full compliance with each framework as defined.

The test condition is not:

Whether a system could implement additional controls.

The test condition is:

Whether the framework requires execution binding as a condition of compliance.

If execution binding is optional, the framework allows invalid actions.

That is the finding.

## Translation Integrity Constraint

All CAI counterfactuals assume that governance rules have been correctly translated into executable constraints.

If translation is incomplete, ambiguous, or incorrect:

- The constraint set does not represent the intended rule
- The system permits invalid actions by definition

In this case:

The failure is not at execution.

The failure is at translation.

CAI does not eliminate this risk.

It relocates it to a verifiable stage.

The Translation Layer produces an explicit, auditable constraint representation that can be independently reviewed, tested, and validated prior to execution, making translation failure visible before it produces governed-state compromise.

## NIST AI Risk Management Framework (AI RMF)

### Invalid Action

An AI system approves a financial transaction that violates defined risk thresholds.

### Compliant System Behavior

- Risk is identified under Map
- Risk is measured under Measure
- Mitigation strategy is defined under Manage
- Logging captures the violation

### Execution Outcome

The transaction executes.

### Failure Point

Risk identification and measurement do not determine execution.

The framework allows:

- Recognition of invalidity
- Without structural prevention

### CAI Counterfactual

- Translation Layer encodes risk threshold as constraint
- Control Assertion Engine evaluates transaction before execution
- Transaction fails admissibility

### Result

NIST AI RMF allows execution of known invalid actions.

CAI prevents execution.

## NIST Cybersecurity Framework 2.0 (CSF 2.0)

### Invalid Action

Unauthorized access to a protected system using valid but misused credentials.

### Compliant System Behavior

- Identity controls are defined under Protect
- Monitoring detects anomalous behavior under Detect
- Incident response is triggered under Respond

### Execution Outcome

Access is granted and actions occur.

### Failure Point

Detection and response occur after execution has begun.

The framework allows:

- Valid credentials to execute unauthorized actions
- Detection without prevention

### CAI Counterfactual

- Translation Layer encodes access constraints beyond identity
- Control Assertion Engine evaluates intent and context
- Access attempt fails admissibility

### Result

CSF 2.0 allows invalid actions to execute before intervention.

CAI blocks execution.

### Clarification

This evaluation does not claim that systems implementing the framework cannot enforce execution constraints.

It identifies that such enforcement is not required by the framework itself.

## ISO/IEC 42001

### Invalid Action

An AI system produces a decision outside approved operational parameters.

### Compliant System Behavior

- Policies define acceptable behavior
- Risk controls are documented
- Monitoring detects deviation

### Execution Outcome

The decision is produced and acted upon.

### Failure Point

Management system controls do not bind execution.

The framework allows:

- Documented compliance
- Without execution enforcement

### CAI Counterfactual

- Translation Layer converts policy into executable constraints
- Control Assertion Engine evaluates decision before execution
- Invalid decision cannot execute

### Result

ISO 42001 allows invalid actions under compliant systems.

CAI prevents them.

## EU AI Act

### Invalid Action

A high-risk AI system produces a prohibited outcome that violates its classification constraints.

### Compliant System Behavior

- System is classified correctly
- Conformity assessment is completed
- Logging records system behavior

### Execution Outcome

The prohibited outcome occurs.

### Failure Point

Compliance obligations do not guarantee execution control.

The framework allows:

- Conformity at design
- Without guaranteed enforcement at execution

### CAI Counterfactual

- Translation Layer encodes regulatory constraints
- Control Assertion Engine enforces admissibility at execution
- Prohibited outcome is unreachable

### Result

The EU AI Act allows invalid execution under compliant conditions.

CAI prevents it.

## OMB A-123

### Invalid Action

A financial control is bypassed during transaction processing.

### Compliant System Behavior

- Control is documented
- Control activity is defined
- Audit trail records bypass

### Execution Outcome

The transaction completes.

### Failure Point

Control documentation does not ensure enforcement.

The framework allows:

- Defined controls
- Without guaranteed execution binding

### CAI Counterfactual

- Translation Layer encodes control as constraint
- Control Assertion Engine enforces admissibility
- Transaction cannot proceed

### Result

OMB A-123 allows control bypass at execution.

CAI prevents it.

## Cross-Framework Result

Across all frameworks tested:

- Invalid actions can execute
- Detection and documentation occur
- Governance does not bind execution

## CAI Position

CAI introduces a different requirement:

Invalid actions must be structurally impossible.

It does this by:

- Converting rules into executable constraints
- Binding evaluation to execution
- Eliminating bypass paths

## Structural Conclusion

Governance frameworks operate on systems.
CAI operates on execution.

That is the difference between managing risk and determining whether action is possible.

## Final Statement

These frameworks answer:

Were the rules defined, evaluated, and documented?

CAI answers:

Can the system act outside those rules?

If it can, governance does not exist at execution.

If it cannot, governance is real.