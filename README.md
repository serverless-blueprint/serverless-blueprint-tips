# serverless-blueprint-tips [![Build Status](https://travis-ci.org/serverless-blueprint/serverless-blueprint-tips.svg?branch=master)](https://travis-ci.org/serverless-blueprint/serverless-blueprint-tips) [![codecov](https://codecov.io/gh/serverless-blueprint/serverless-blueprint-tips/branch/master/graph/badge.svg)](https://codecov.io/gh/serverless-blueprint/serverless-blueprint-tips)
Provides tips every time a serverless component is generated.

### Getting Started

* Import ```TipProvider``` class
* Create an instance of ```TipProvider``` class
* Invoke ```provideTips``` method 

```typescript
import {TipProvider} from "src/org/blueprint/serverless/tips/provider/TipProvider"; 
import {Tips} from "src/org/blueprint/serverless/tips/model/Tips";

let tipProvider = new TipProvider();
let tips: Tips = tipProvider.provideTips();
```

### FAQs

1. **What is the maximum number of tips that can be provided by default?**

By default, a maximum of 5 tips will be provided. 
Although, there is an option to customize the number of tips by passing a constructor parameter to ```TipProvider``` 

**Example**

```typescript
import {TipProvider} from "src/org/blueprint/serverless/tips/provider/TipProvider"; 
import {Tips} from "src/org/blueprint/serverless/tips/model/Tips";

let tipProvider = new TipProvider(10); //Get a maximum of 10 tips
let tips: Tips = tipProvider.provideTips();
```  


2. **Will 10 tips be provided if I pass 10 as a constructor parameter to TipProvider?**

No, this parameter signifies the maximum number of tips that can be provided. In this case, a maximum of 
10 tips will be provided.


3. **What does a tip contain?**

A tip consists of the following - 

* an id which is numeric
* description which is text
* reference which is a link to the documentation about tip content  


4. **Where are tips stored?**

Tips are stored in a JSON file which is present under ```resources``` folder in source directory.