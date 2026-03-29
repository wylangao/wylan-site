---
title: "From Spreadsheet to Dashboard: Building Energy Monitoring at Scale"
date: "2025-01-10"
excerpt: "How I replaced a month-long manual reporting process with a real-time Power BI dashboard using confidence interval flagging."
tags: ["python", "power-bi", "energy", "data-viz"]
---

## The Problem

When I joined ENGIE North America, the team was spending roughly a month every quarter manually reviewing building electricity usage reports — looking for anomalies, flagging outliers, and generating summaries for facilities management.

The data existed. It just wasn't accessible in a useful way.

## The Approach

The core insight was simple: instead of looking at raw usage numbers, we should be asking *is this building behaving differently than expected?*

That reframe led to a confidence interval approach. For each building, I fit a baseline model using historical usage patterns, then flagged any reading that fell outside the expected range.

```python
import pandas as pd
from scipy import stats

def flag_anomalies(df, building_col, usage_col, confidence=0.95):
    results = []
    for building, group in df.groupby(building_col):
        mean = group[usage_col].mean()
        std  = group[usage_col].std()
        ci   = stats.norm.interval(confidence, loc=mean, scale=std)
        group = group.copy()
        group['flagged'] = ~group[usage_col].between(*ci)
        results.append(group)
    return pd.concat(results)
```

## The Result

The dashboard made anomalies immediately visible. Buildings that were quietly running HVAC systems overnight, or spiking on hot weather days, surfaced instantly.

That month-long process became instantaneous.

## What I Learned

Data science work is often less about fancy models and more about asking the right question. Confidence intervals aren't glamorous — but they communicate uncertainty in a way that non-technical stakeholders actually understand.

*TODO: Add your own posts by creating new `.md` files in `src/posts/`*
