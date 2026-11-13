---
title: "How much you know about testing ...1"
date: 2026-11-13
tags: [SDET, Automation, Testing]
description: ""
---
> 🧪 the palest ink is better than the best memory ✍️
## Software Testing 
Software Testing is a critical phase of the Software Development Life Cycle (SDLC) that ensures a software application works correctly and meets user requirements.

It involves examining different aspects of the software to identify defects and ensure it works as intended.
- Can be performed manually or using automation tools.
- Covers both functional and non-functional aspects of an application.
- Can be carried out at different stages of the software development lifecycle.

## Types of Software Testing
> - Based on **Execution Method**: Manual Testing and Automation Testing.
> - Based on **Testing Technique**: Black Box Testing, White Box Testing, and Gray Box Testing.
> - Based on **Testing Level**: Unit Testing, Integration Testing, System Testing, and Acceptance Testing.
> - Based on **Testing Purpose**: Functional Testing and Non-Functional Testing.

### Based on Execution Method
#### Manual Testing 
is a software testing technique in which testers execute test cases manually without using automation scripts or tools.

- Helps identify UI/UX issues related to layout, design, and text.
- Does not require developing automation scripts or frameworks.
- Easily adapts to frequent or unexpected changes in the application.
#### Automation testing: 
is a testing technique in which test cases are executed using scripts and automation tools. It is mainly used for repetitive and time-consuming tests to improve efficiency, consistency, and test coverage.

- Runs tests automatically, saving time and effort.
- Enables the execution of a large number of test cases efficiently.
- Minimizes the effort required for repetitive testing tasks.

### Types Based on Testing Technique
> Depending on the tester's knowledge of the internal implementation.

#### White Box Testing
is a software testing technique in which the internal structure, logic, and source code of an application are examined. It is typically performed by developers to verify that the code functions correctly and efficiently.

- Focuses on internal code, logic, and program structure.
- Requires knowledge of programming and code implementation.
- Helps identify errors in loops, conditions, paths, and data flow.
  
#### Black Box Testing
which the functionality of an application is tested without knowledge of its internal code or structure. It focuses on inputs and expected outputs to verify whether the system behaves correctly.

- Focuses on the application's external functionality.
- Does not require knowledge of the internal code or implementation.
- Validates the application by comparing actual results with expected results.
  
#### Gray Box Tesing
 combines aspects of Black Box and White Box Testing. The tester has partial knowledge of the internal structure while testing the application from an external perspective

- Combines functional and structural testing approaches.
- Requires partial knowledge of the application's internal implementation.
- Helps identify defects related to data flow and integration.
  
### Types Based on Testing Level
#### Unit Testing

#### Integration Testing

#### System Testing

#### Acceptance Testing


### Types based on Testing Purpose
#### Functional Testing
> Whether the software functions meet the specified business requirements.
- Smoke Testing
  Checks the basic and critical functionalities of a new build to determine whether it is stable enough for further testing.
- Sanity Testing
    Performs a focused validation of specific changes or bug fixes to ensure they work as expected.
- Regression Testing
   Verifies that recent changes or bug fix haven't negatively affected existing.functionalities
- Retesting
    Verify whether a previously reported defect has been successfully fixed. 
- API Testing
    Verify API functionality by validating requests, responses, data exchange and business logic.
- Interface Testing
    Verify whether different systems or components communicate and exchange data correctly.


#### Non-Functional Testing
> Evaluates how well the software performs under different conditions. It focuses on quality attributes such as performance, security, usability, reliability, and scalability.

- Performance Testing:
    Evaluates the speed, responsiveness, and stability of an application under different workloads.
- Security Testing
  
    Identifies vulnerabilities and weaknesses that could compromise the application's security.
- Usability Testing
    Evaluates how easy and intuitive the application is for users.
- Reliability Testing
    Verifies whether the software performs consistently over a specified period.    
- Compatibility Testing 
    Verifies that the application works correctly across different browsers, devices, operating systems, and environments.