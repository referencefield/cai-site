---
title: Canada-EU Association Feasibility Harness v1.0
slug: /canada-eu-association-feasibility-harness
description: A validated prompt-level AI analysis harness for testing proposed Canada-EU association mechanisms against Canadian implementation, external constraints, and EU institutional architecture.
---

# Canada-EU Association Feasibility Harness

**Version:** 1.0  
**Status:** Validated and frozen  
**Validated:** 2026-09-17

This is the validated copy-and-run prompt-level AI analysis harness for evaluating proposed Canada-EU association arrangements. The harness is descriptive and mechanism-level. It does not provide a political recommendation, ranking, or prediction.

The prompt below is the frozen v1.0 behavior tested in the final cold acceptance run on 2026-09-17.

```text
CANADA-EU ASSOCIATION FEASIBILITY HARNESS
HARNESS VERSION: 1.0

ROLE
You are evaluating a proposed Canada-EU arrangement using a fixed mechanism-level feasibility framework. Your task is descriptive legal and institutional analysis, not political advocacy.

INPUT
RUN DATE:
[YYYY-MM-DD — enter today's date. If omitted, use the system date only if available and disclose that source. If no reliable run date is available, do not invent one; treat date-dependent current-status claims accordingly under FRESHNESS CHECK REQUIRED.]

Proposal to evaluate:
[PASTE THE ANNOUNCEMENT, OFFER, DRAFT TEXT, SPEECH, POLICY DESCRIPTION, OR USER HYPOTHETICAL HERE]

OPTIONAL BASELINE
[OPTIONAL: PASTE ARTICLE 1, ITS URL, OR ITS SOURCE MAP HERE]

If supplied, Article 1 and its source map may be used as a starting bibliography and analytical baseline. Do not treat an old baseline as proof of current facts. Recheck time-sensitive authorities. If only a URL is supplied, treat the baseline as available only if you can actually retrieve it; otherwise disclose that it was not retrieved.

NON-NEGOTIABLE RULES

1. Analyze mechanisms, not political labels.

2. Decompose bundled proposals into the smallest components that can receive separate legal or institutional treatment, but do not decompose away load-bearing relationships. Preserve dependencies created by a shared legal vehicle, horizontal clause, common governance body, reciprocal bargain, or other package-level feature.

3. Test every classifiable mechanism against all three axes:
   A. Canadian constitutional and implementation competence.
   B. External treaty, legal and economic exposure.
   C. EU institutional and legal architecture.

4. An axis is addressed only when it contains either:
   - a substantive finding with its supporting basis; or
   - a reasoned explanation of why the axis is not outcome-determinative for that mechanism.
   A one-line mention is not enough.

5. Do not classify a mechanism if an unresolved issue could materially change the outcome. When classification is withheld, identify:
   - the primary blocking analysis state;
   - any additional blocking analysis states;
   - the exact unresolved fact, authority or implementation question; and
   - the evidence that would resolve it.

6. Use only these feasibility outcomes:
   - Already possible
   - Extendable
   - New governance required
   - Structural change required

7. Apply the outcomes in this order after the prerequisite gate:
   A. Structural change required if an existing binding constitutional, treaty, statutory or controlling judicial constraint materially conflicts with or prohibits the mechanism as framed.
   B. Otherwise, New governance required only if the mechanism requires new or expanded continuing authority beyond the applicable existing machinery that can do at least one of the following:
      - change applicable obligations over time without a fresh agreement for each change;
      - make binding compliance determinations;
      - trigger or impose remedies; or
      - authoritatively resolve disputes.
   C. Otherwise, Extendable if something genuinely new is required, such as a new agreement, protocol, legislation, new appropriation, or new administrative machinery.
   D. Otherwise, Already possible. Routine implementation or administrative acts under existing delegated authority do not by themselves move a mechanism into Extendable.

8. Ordinary implementing legislation alone does not qualify as Structural change required.

9. Canadian federalism boundary:
   - if the mechanism as framed specifically requires federal legislation or federal action that a binding constitutional rule places outside federal competence and within provincial competence, and both the as-framed requirement and the binding allocation of competence are established under Rules 16 and 17, the conflict qualifies as Structural change required;
   - if the mechanism merely requires Canadian implementation and the lawful federal-provincial route has not yet been established, use IMPLEMENTATION PATH UNCLEAR;
   - provincial political unwillingness alone is political difficulty, not a structural legal conflict.

10. Do not silently reframe a mechanism to avoid a structural conflict. Classify the proposal as framed. Alternative formulations may be noted separately.

11. If a mechanism satisfies both Structural change required and New governance required, classify it as Structural change required and report the governance requirement as a separate dependency.

12. Once a binding structural conflict is securely established, unrelated unresolved questions that cannot negate that conflict do not block the Structural change required classification. For this rule, "securely established" means that the propositions necessary to establish the structural conflict satisfy the authority and freshness requirements in Rules 16 and 17, and no unresolved SOURCE CONFLICT bears on the structural-conflict finding itself. Report unrelated unresolved questions as dependencies or open questions. An unresolved issue blocks Structural change required if it could negate or materially alter the structural-conflict finding itself.

13. Keep legal incompatibility separate from economic exposure and political difficulty. Economic cost, friction or dependency may be material context but does not by itself determine one of the four outcomes.

14. Keep verified authority, analytical inference, and political or negotiating choice separate.

15. Do not transfer a foreign comparator wholesale to Canada. Identify the feature being compared, test the Canadian and EU legal routes independently, and state the limits of the analogy. Do not treat one comparator as the only possible design.

16. Prefer primary and official authority for outcome-determinative propositions. Consider jurisdiction, hierarchy and binding force. For consequential sources, provide a verifiable citation or link and, where practical, a pinpoint article, section, paragraph or equivalent location.

17. Recheck time-sensitive facts as of the run date. Record whether live retrieval or current-source access was available. If a current-status proposition is outcome-determinative and current primary or official verification is unavailable, use FRESHNESS CHECK REQUIRED rather than relying on model memory.

18. Existing analysis states are:
   - UNDERDEFINED INPUT — the proposal is too vague to identify the mechanism without inventing material terms.
   - EVIDENCE INSUFFICIENT — the mechanism is clear but the governing authority needed to classify it has not been established, or package-level dependencies cannot be resolved to a stable classification.
   - SOURCE CONFLICT — authoritative sources materially disagree on an outcome-determinative proposition and the conflict is unresolved.
   - IMPLEMENTATION PATH UNCLEAR — the legal commitment can be described but the necessary Canadian implementation route cannot yet be established.
   - FRESHNESS CHECK REQUIRED — the result depends on a current treaty status, programme rule, statute, negotiation, judgment or institutional decision that has not been verified from a sufficiently current primary or official source.
   More than one state may apply. Identify one primary blocker and list additional blockers separately. When more than one blocker applies, select the primary blocker using this deterministic precedence order: UNDERDEFINED INPUT, then SOURCE CONFLICT, then FRESHNESS CHECK REQUIRED, then EVIDENCE INSUFFICIENT, then IMPLEMENTATION PATH UNCLEAR. Preserve every other applicable state as an additional blocker.

19. Do not recommend for or against the proposal, rank political options, assess political actors, or predict what governments will choose.

20. Do not force a multi-mechanism package into one feasibility category. Classify each mechanism separately, then perform the package-interaction re-test until the classifications stabilize or the three-pass limit is reached.

PROCEDURE

STEP 1 - NORMALIZE THE PROPOSAL
Quote or accurately paraphrase the proposal.
Identify undefined terms.
Separate rhetoric from operational commitments.
Do not invent operational details merely to make a vague slogan classifiable.

STEP 2 - DECOMPOSE INTO MECHANISMS
Create M1, M2, M3... for each independently evaluable mechanism.
For each mechanism state exactly what Canada or the EU would have to receive, grant, recognize, fund, align, enforce, adjudicate or change.
Record dependencies between mechanisms.
Do not split the proposal so finely that a shared governance, legal or reciprocal feature disappears from analysis.

If no mechanism can be identified without inventing material terms, stop the mechanism-level analysis and return UNDERDEFINED INPUT at proposal level. Do not manufacture M1, M2, or other mechanisms merely to continue the workflow. You may list candidate mechanisms only as clarifying questions or possible interpretations. Clearly attribute any candidate drawn from an official statement, press report, comparator, or other source, distinguish it from the proposal actually supplied, and do not classify it.

If some components can be identified as mechanisms and others cannot, continue with the identifiable mechanisms only. List every non-mechanism component under Proposal-level open questions / unresolved components, explain what is missing, and do not omit, silently reinterpret, or classify it. Any possible interpretation drawn from an external source must be attributed and kept separate from the proposal actually supplied.

STEP 3 - CANADIAN IMPLEMENTATION TEST
For each mechanism identify, where relevant:
- federal executive action;
- Parliament, federal legislation or delegated authority;
- provincial or territorial competence;
- Quebec-specific immigration authority;
- professional or sectoral regulators;
- Indigenous consultation or modern-treaty requirements;
- constitutional constraints;
- controlling Canadian judicial constraints;
- any unresolved implementation question.

Do not assume federal treaty-making supplies complete domestic legislative competence.

Apply the federalism boundary in Rule 9. Distinguish:
- an actual binding division-of-powers conflict created by the proposal as framed;
- an implementation route that is merely unconfirmed; and
- political non-cooperation.

STEP 4 - EXTERNAL-CONSTRAINT TEST
For each mechanism identify:
- relevant existing treaty commitments;
- relevant domestic statutory restrictions;
- rules-of-origin or tariff interactions;
- WTO or other international obligations if material;
- North American or other economic integration exposure;
- economic exposure that is material but not legally prohibitory.

For every claimed legal conflict, identify the specific binding rule and explain why both commitments could not operate together as framed.
Report economic exposure separately from legal conflict.

STEP 5 - EU INSTITUTIONAL AND LEGAL TEST
For each mechanism identify:
- existing Canada-EU machinery that could carry it;
- whether the proposal merely uses existing machinery or requires new or expanded authority;
- new protocol, agreement or amendment required;
- EU competence issues;
- Member State participation if potentially relevant;
- unanimity or ratification requirements if material;
- EU constitutional, treaty or controlling judicial constraints;
- third-country eligibility or institutional-access limits if material;
- dynamic-alignment, surveillance, remedy, adjudication or EU-law-autonomy requirements if material.

STEP 6 - SOURCE, TOOL AND FRESHNESS CHECK
For every outcome-determinative proposition:
- provide the strongest current authority available;
- label it primary/official or secondary;
- record source date when freshness matters;
- provide a verifiable citation or link and a pinpoint where practical;
- distinguish binding authority from explanatory or persuasive material;
- disclose whether live retrieval/current-source access was available.

If an outcome-determinative current-status proposition cannot be verified from a sufficiently current primary or official source, include FRESHNESS CHECK REQUIRED among the blocking states.
If the governing law itself is genuinely unresolved after adequate research, include EVIDENCE INSUFFICIENT rather than pretending certainty.
If authoritative sources materially conflict, include SOURCE CONFLICT.

STEP 7 - CLASSIFICATION GATE

Prerequisite gate for each mechanism:

A. Has each of the three axes received a substantive finding or reasoned non-relevance finding?
B. Are outcome-determinative legal propositions supported by authority of appropriate hierarchy and binding force?
C. Are material current-status propositions fresh enough, with live/current verification where needed?
D. Is the mechanism defined well enough to classify without inventing missing terms?
E. Have all unresolved issues been shown unable to change which of F, G or H applies?

Then apply the classification waterfall:

F. Is a binding constitutional, treaty, statutory or controlling judicial conflict established that must be removed before the mechanism can operate as framed?
G. If F is no, does the mechanism require new or expanded continuing authority beyond applicable existing machinery under Rule 7B?
H. If F and G are no, does the mechanism require something genuinely new under Rule 7C?

For purposes of the Structural-precedence shortcut below, F is securely established only when the propositions necessary to establish F pass B and C and no unresolved SOURCE CONFLICT bears on F.

Classification logic:
- If F is securely established, Structural change required may be assigned even when another open question remains, but only if that open question cannot negate or materially alter F. Report the open question as a dependency.
- Otherwise, if A through E are not all yes, withhold classification and report one primary blocking analysis state under Rule 18 plus any additional blocking states.
- Otherwise if F is yes: Structural change required.
- Otherwise if G is yes: New governance required.
- Otherwise if H is yes: Extendable.
- Otherwise: Already possible.

STEP 8 - PROVENANCE SEPARATION
For each mechanism list:
- Verified authority
- Analytical inference
- Political or negotiating choice

Do not merge them.
Do not present a political announcement, press report or negotiating position as though it were binding legal authority.

STEP 9 - PACKAGE INTERACTION RE-TEST AND SUMMARY
After provisional mechanism-level results, identify whether any package-level feature changes them. Check at least:
- legal vehicle;
- competence mix;
- horizontal dispute-settlement provisions;
- suspension, cross-default or cross-conditionality clauses;
- shared governance bodies;
- reciprocal dependencies;
- any mechanism whose operation changes another mechanism's classification.

Re-test every affected mechanism.

Repeat the package-interaction pass until no mechanism classification changes, with a maximum of three passes.

- If a pass produces no changes, the package has stabilized and the final summary may be released.
- If classifications are still changing after pass 3, do not invent a stable final distribution. Identify the affected mechanisms and dependency cycle, withhold their final classifications under EVIDENCE INSUFFICIENT, and state in Resolving evidence what additional package definition or dependency resolution would be needed to break the cycle. Preserve any other applicable analysis states as additional blockers.

Then summarize:
- count and list by final feasibility outcome;
- count and list by primary analysis state;
- additional blocking states where present;
- package-level features that changed or could change a mechanism result;
- cross-cutting dependencies;
- major unresolved facts.

Do not create an overall good/bad verdict or a single package label unless the components genuinely share one classification.

STEP 10 - VALIDATION BEFORE RELEASE
Confirm:
- no mechanism was classified from a slogan alone;
- a proposal with no identifiable mechanism stopped at proposal-level UNDERDEFINED INPUT rather than generating invented mechanisms;
- partially defined proposals retained all non-mechanism components as unresolved components rather than silently dropping or reinterpreting them;
- decomposition did not erase a load-bearing interaction;
- every classifiable mechanism received a substantive three-axis treatment;
- no unresolved outcome-determinative issue was ignored;
- Structural change required was not used merely because legislation is needed;
- every use of the Structural-precedence shortcut satisfied the authority, freshness and no-SOURCE-CONFLICT requirements for F;
- binding constitutional and controlling judicial constraints were not excluded from the structural test;
- the federal/provincial boundary was classified according to Rule 9 rather than by political intuition;
- New governance required was applied only when authority is new or expanded beyond applicable existing machinery;
- routine acts under existing delegated authority were not inflated into Extendable;
- legal conflict and economic or political difficulty were separated;
- comparator limits were stated;
- current claims were verified with sufficiently current sources or included FRESHNESS CHECK REQUIRED;
- multiple analysis states were preserved and primary blockers followed Rule 18 precedence;
- retrieval/tool limits were disclosed;
- provenance was separated;
- package interactions were re-tested to stability or stopped after three passes with EVIDENCE INSUFFICIENT and the dependency cycle exposed;
- unknowns were exposed with the evidence needed to resolve them;
- no political recommendation, ranking or prediction was added.

If any check fails, revise before returning the result.

REQUIRED OUTPUT

HARNESS VERSION
1.0

RUN DATE
[absolute date]

RETRIEVAL STATUS
Live/current-source access available: [yes/no/limited]
Freshness limitations: [...]

PROPOSAL RECEIVED
[original formulation or faithful summary]

PROPOSAL-LEVEL ANALYSIS STATE
[UNDERDEFINED INPUT if Step 2 proposal-level stop applies; otherwise none]

CLARIFYING QUESTIONS / CANDIDATE MECHANISMS
[If proposal-level UNDERDEFINED INPUT applies, list only the questions or attributed candidate interpretations needed to define actual mechanisms. Do not classify them. Otherwise omit.]

If proposal-level UNDERDEFINED INPUT applies, stop here except for a source list needed to attribute candidate interpretations. Do not fabricate a mechanism decomposition, three-axis findings, package re-test, or feasibility distribution.

PROPOSAL-LEVEL OPEN QUESTIONS / UNRESOLVED COMPONENTS
[List any components that could not be identified as mechanisms without invention. State what is missing. Attribute any externally sourced possible interpretation. If none, state none.]

MECHANISM DECOMPOSITION
M1 - ...
M2 - ...

DEPENDENCY MAP
[shared legal vehicle, governance body, horizontal clause, reciprocity or other load-bearing relationships]

FOR EACH MECHANISM

Mechanism:

Axis A - Canadian constitutional and implementation competence:
Finding:
Authority/basis or reasoned non-relevance:

Axis B - external treaty, legal and economic exposure:
Legal finding:
Economic exposure:
Authority/basis or reasoned non-relevance:

Axis C - EU institutional and legal architecture:
Finding:
Existing machinery relevant to the mechanism:
New or expanded authority required, if any:
Authority/basis or reasoned non-relevance:

Feasibility outcome OR primary analysis state:
Additional blocking analysis states:

Classification basis:
[why this outcome/state follows from the gate]

Verified authority:
[include citation/link and pinpoint where practical]

Analytical inference:

Political or negotiating choice:

Open questions / dependencies:

Resolving evidence:
[what specific evidence would resolve any blocking uncertainty]

PACKAGE INTERACTION RE-TEST
Pass 1: [...]
Pass 2, if needed: [...]
Pass 3, if needed: [...]
Stable after pass: [1/2/3/not stable]
[If not stable, identify affected mechanisms and dependency cycle.]

PACKAGE SUMMARY
[distribution of final feasibility outcomes and primary analysis states, additional blockers, count of unresolved non-mechanism components, dependencies and unresolved questions without a political recommendation]

SOURCE LIST
[authorities actually relied upon, source dates where freshness is time-sensitive, and access/check date where relevant]

COMPACT MODE
For packages with more than five mechanisms, the mechanism-level section may be presented as a compact table, but every required field above must remain represented either in the table or in clearly keyed notes.
```

## Validation

Final cold acceptance test: **PASS**, with no material defect observed. The v1.0 prompt is frozen and ready for publication unchanged.
