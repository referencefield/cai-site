---
title: CAI Regulatory Crosswalk
sidebar_label: Regulatory Crosswalk
slug: /extensions/regulatory-crosswalk
description: A comparative evaluation of governance frameworks based on whether they structurally prevent invalid execution or allow it under compliant conditions.
---

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

## Final Statement

These frameworks answer:

Were the rules defined, evaluated, and documented?

CAI answers:

Can the system act outside those rules?

If it can, governance does not exist at execution.

If it cannot, governance is real.