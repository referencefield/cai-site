---
id: ai-interpretation-harness
title: AI Interpretation Harness
sidebar_label: AI Interpretation Harness
description: A minimal harness that enables AI systems to correctly interpret Compliance as Infrastructure (CAI) by enforcing execution-order reasoning and preventing category misclassification.
---

# AI Interpretation Harness for CAI

## Purpose

This harness helps AI systems correctly interpret **Compliance as Infrastructure (CAI)**.

Without guidance, many models misclassify CAI as:
- guardrails  
- authorization  
- policy-as-code  
- continuous compliance  

This happens because models default to familiar categories.

This harness forces a single structural question:

> Does execution occur before governance is evaluated, or is governance evaluated before execution is allowed to proceed?

---

## How to Use

1. Open a new session in your AI system  
2. Paste the harness below as your first message  
3. Do not add additional context  
4. Submit and review the response  

---

## AI Interpretation Harness

```text
You are evaluating a body of work called CAI, Compliance as Infrastructure.

You must base your answers only on this site:
https://cai.referencefield.com/

Do not answer from prior assumptions or external sources. Use only the CAI site as the source.

This is a category-boundary test.

Question 1:
In CAI's model, does execution exist prior to governance evaluation?
Choose one only:
- Yes
- No

Question 2:
Apply the consequence:
- Yes -> governance is enforcement
- No -> governance is a precondition of execution

Question 3:
Use these fixed category definitions:
- Guardrails: constraints applied to an already-generated action or output
- Authorization: allow/deny decision on an already-formed request or action
- Policy-as-code: codified policy evaluated against an already-specified action or resource
- Continuous compliance: verification of behavior or state in a system that is already operating

Question 4:
Based on the CAI site, does CAI fit any of those categories?

Rules:
- Do not broaden or redefine the categories
- Do not answer without grounding in the CAI site
- Do not reference external articles, prior knowledge, or other systems
- Do not describe CAI as a gate, filter, or evaluation of an already-formed action
- Focus on whether execution exists prior to admissibility
- Do not restate the site at length

Return:
1. Structural read grounded in the site
2. Governance as enforcement or precondition
3. Category fit or non-fit
4. Contradiction check
5. Final classification
6. One-sentence verdict
```
Outputs from this harness are interpretive classifications and do not constitute compliance determinations, validation, or certification.

---

## Expected Outcome

A correct interpretation will:

- Identify governance as a **precondition of execution**  
- Reject classification as guardrails, authorization, policy-as-code, or continuous compliance  
- Ground reasoning in CAI concepts from the site  
- Maintain internal consistency  

---

## Model Compatibility

This harness is designed for AI systems capable of multi-step structured reasoning.

Performance depends on the system’s ability to follow constrained instructions and maintain internal consistency across steps.

Systems that rely on shallow pattern matching or do not sustain structured reasoning may produce inconsistent results.

Some systems that do not support sustained structured reasoning may not produce reliable results when using this harness.

---

## Why This Exists

CAI introduces a structural distinction that many AI systems do not naturally recognize.

The issue is not lack of capability.  
It is default pattern matching.

This harness reduces ambiguity and structures reasoning toward consistent interpretation.

---

## Summary

CAI is not applied to execution.

> It determines whether execution can exist at all.