# A Crash Course in Accounting

I spent nearly 2 years working at Quanta, an AI-enabled accounting firm, as a founding engineer. When I joined, we had just started building the first iteration of our product for a few design partners.

I was thrust into the land of Quickbooks, financial statements and journal entries, initially as an accountant because we couldn’t automate all the work, and ultimately as an engineer to build the underlying systems to do the accounting.

If you don't know anything about accounting (as I did before joining the company) here's a comprehensive guide to give you the domain knowledge, terminology and mental models to set yourself up for success in the world of accounting.

---

# First, the why

Accounting exists for three functions:

- For businesses to keep a record of an organization’s financial information
- For businesses to produce financial insights and reports (balance sheet, income statement, business insights)
- For businesses to prepare and file taxes, and be ready for audits

Accounting is backward-facing — accounting explains _what happened_. Finance uses accounting outputs to decide _what should happen next_.

Every transaction that has happened is systematically logged into the “books” via a **chart of accounts** (COA). The chart of accounts is a structured legend/map of all the “accounts” where financial transactions can be recorded in your company’s **general ledger** (GL)**.**

The chart of accounts act as a compass to guide the accountant where to record a given transaction. It ensures organization and consistency in how transactions are reported. The granularity of these accounts is subjective to the company and accounting firm, but SAAS companies tend to look the same.

<details>
<summary>Example high-level COA for a SaaS company</summary>

| **Numbering System** | **Account Type**                        |
| -------------------- | --------------------------------------- |
| 100000               | Asset                                   |
| 200000               | Liability                               |
| 300000               | Equity                                  |
| 400000               | Revenue                                 |
| 500000               | COGS                                    |
| 600000               | Sales, General & Administrative Expense |
| 700000               | Research & Development Expense          |
| 900000               | Other (Income) / Expenses               |

</details>

The general ledger is a **business’s ultimate source of truth.** It contains a record of all the transactions a business incurs and reflects a comprehensive picture of their finances.

---

# The state of accounting today

At the end of every month, accountants **“close the books”** for a company:

1. They get a list of all the transactions of the company over the month
2. They categorize every transaction using the company’s COA
3. For transactions they are unsure about, they have to clarify with the founders / CFO
4. After every transaction has been categorized, they can “close the books” and generate the reports for the month

Accountants apply what is known as **generally accepted accounting principles** (GAAP) while doing the accounting. These are a set of rules, standards and procedures issued and revised by the Financial Accounting Standards Board (FASB). Public companies in the U.S. must follow GAAP when producing their financial statements.

To close the books, accountants apply their **close checklist** — a comprehensive list of tasks and procedures that are needed to be completed to accurately close the books.

After closing, the company can then answer insights into their business:

- Where did we spend more money this month?
- What is our runway and cash burn?
- Can we forecast what adding 3 employees will do?

Companies that are pre-seed to Series B/C will outsource their accounting work to an external accounting company. These external accounting companies use offshore workers from the Philippines and India to crunch numbers. Think Accountalent, Kruze, Pilot, etc.

Companies that are bigger than Series B/C will have an in-house finance team to do the accounting and reporting, commonly using NetSuite with an amalgamation of other tools. Every public company tends to use NetSuite!

---

# The elements of double-entry bookkeeping

Modern day accounting uses the principle of **double-entry bookkeeping**. Double-entry bookkeeping was invented 500+ years ago by Luca Pacioli and much hasn’t changed since then. (Aside: it is rumored that Luca was a secret lover to Leonardo da Vinci)

The double-entry bookkeeping system records **2 entries** for every transaction. Naively, the place where the money went, and the place where the money came from.

> Let's say your company earned $1,000 in revenue and got paid immediately in cash.

We’re going to use a canonical example of a revenue transaction to understand double-entry bookkeeping, breaking it down into 4 key components:

1. Debits/Credits
2. Accounts
3. Journal Entries
4. General Ledger

---

## Debits and Credits

There are two sides to every transaction recorded in double-entry bookkeeping. **Debits and Credits.**

The terms debit and credit don’t actually mean increases or decreases by themselves. The effect they have on an account depends on the **type** of account. You will never see a negative number in a general ledger, it’s the debit or credit that tells you the sign of this number with respect to the account it’s going into.

> The fundamental rule of double-entry bookkeeping is **Total Debits = Total Credits**

You “debit” an account, and “credit” another account. In this case, we would **debit Cash** for $1,000 and **credit Revenue** for $1,000. This is still one $1000 transaction, but the transaction touches two different accounts. Hence, double-entry bookkeeping.

---

## Accounts

Now, let’s go over the accounts that these debits and credits get applied to. In accounting, there are 5 account types:

1. **Assets** — e.g. your bank accounts
2. **Liabilities** — e.g. your credit card bill you haven’t paid yet (liable to pay)
3. **Income** — e.g. your revenue from customers
4. **Expense** — e.g. your meal and travel expenditure
5. **Equity** — e.g. your employee equity

Accounts are named buckets that track changes to specific parts of a business’s finances over time. These 5 types encompass all the financial transactions happening at your company.

Now, depending on the account type, debits and credits can have different outcomes.

|               | **Debit**   | **Credit**  |
| ------------- | ----------- | ----------- |
| **Asset**     | 🔼 Increase | 🔻 Decrease |
| **Liability** | 🔻 Decrease | 🔼 Increase |
| **Income**    | 🔻 Decrease | 🔼 Increase |
| **Expense**   | 🔼 Increase | 🔻 Decrease |
| **Equity**    | 🔻 Decrease | 🔼 Increase |

> You debit an Asset or Expense account **to increase it.** You credit a Liability, Income or Equity account **to increase it.**

I know you’re reading this and wondering why this makes any sense. Intuitively, you think that “crediting” something means to add to it, and “debiting” something means to take away. And for most use cases of these words you’re right.

But in double-entry bookkeeping, it is key to understand that the meaning of these words change depending on the account. And with these changing definitions, we get the golden rule of accounting:

> **Assets = Liabilities + Equity**

If you took all the debits - credits in the asset account, it will equal all the credits - debits in the liabilities + equity accounts.

Another way to remember this equation is that this is also known as the balance sheet equation. On the balance sheet, you’ll find your assets, liabilities and equity. Income and expenses live on the income statement.

Going back to our revenue example, we can now understand the two accounts and the correct operation (debit/credit):

| Account          | Debit  | Credit | Notes              |
| ---------------- | ------ | ------ | ------------------ |
| Cash (asset)     | $1,000 |        | Debit to increase  |
| Revenue (income) |        | $1,000 | Credit to increase |

---

## Journal Entry

We have all the building blocks (the sign, the account, the amount, the date) to now construct the core transaction of accounting which is the journal entry (JE).

A journal entry simply bundles together a set of debits and credits. Every journal entry is composed of a set of journal entry line items. Each line item has an account, a type (debit / credit), an amount, and a date it was applied on. The date for all the JE line items should be the same.

When viewing a journal entry, debits are listed **first,** and credits are second.

Here’s what the revenue JE would look like:

|                | **Account** | **Debit** | **Credit** | **Effective Date** |
| -------------- | ----------- | --------- | ---------- | ------------------ |
| JE line item 1 | Cash        | $1000     | 0          | 12/1/2025          |
| JE line item 2 | Revenue     | 0         | $1000      | 12/1/2025          |

---

## General Ledger

Now, imagine every financial transaction and downstream effects of each transaction being recorded. All of the journal entries need a place to live, be viewed, and for financial statements to be built off of.

That’s what the general ledger is.

> The general ledger is **the complete record of all financial transactions of a company.**

It stores all the journal entries (with their corresponding journal entry line items) where accountants can see a comprehensive picture of what went into each account (debits / credits) on any time frame.

---

# The pillars of accounting

Now that you understand how double-entry bookkeeping works, let’s dive a little deeper into the pillars of accounting. Transactions can come from anywhere, such as:

- **Your bank accounts**
  - Chase, Wells Fargo, Ramp Treasury, etc.
- **Your revenue systems**
  - Stripe, Tabs, Rillet, Manual invoices, QBO invoices, etc.
- **Your payroll**
  - Rippling, Warp, Justworks, etc.
- **Your credit card purchases**
  - Ramp, Brex, Amex, etc.

The accountant's job is to make sense of all this source data, and build the "pillars" to handle similar types of transactions. There are four pillars that we can dive deeper on, and understand at a high level how we do the bookkeeping for.

---

## Expenses

At a very high level, expenses are anything at the company you spent money on or are going to spend money on.

Let’s go through a couple examples to understand this better:

### Simple Spends

> I walk into a Paper Son and spend $5 on a coffee and an ube croissant

This is the simplest form of expense. I, an employee of the company, charged $5 to my ramp card. We received a ramp transaction from the API, and we would bookkeep this as:

| Account               | Debit | Credit |
| --------------------- | ----- | ------ |
| Meals (expense)       | $5    |        |
| Ramp Card (liability) |       | $5     |

The Ramp Card is a liability account because whatever my CC bill is at the end of the month, I am liable to pay for.

### Fixed Assets

> I go into the apple store and I buy a $5K laptop for the team

This one’s interesting. We’re going to introduce a new concept called a **Fixed Asset.** When you buy equipment or furniture that’s sizable enough (1K+ for most early stage startups), you want to **depreciate that asset.**

Depreciation is the act of amortizing the cost of your asset over a duration (3-5 years) depending on the type of the asset. The idea is that if you took your brand new laptop today, and tried reselling it, you could! The asset has value. Versus the coffee we just bought and drank is now gone. We’ve consumed it and there is no asset to sell.

**Fixed assets create fixed asset schedules.** The schedule holds the monthly depreciation amounts that we’re going to book. Depreciation, as with most schedules that you’ll learn, get booked at the end of every month for the duration of the schedule.

Here’s what the bookkeeping for this fixed asset will look like:

**Transaction JE:**

JE #1 (12/1/2025)

| Account                       | Debit  | Credit |
| ----------------------------- | ------ | ------ |
| Computers & Equipment (asset) | $5,000 |        |
| Ramp Card (liability)         |        | $5,000 |

**Fixed asset schedule JEs:**

JE #2 (12/31/2025) - first depreciation JE

| Account                       | Debit   | Credit  | Notes          |
| ----------------------------- | ------- | ------- | -------------- |
| Depreciation (expense)        | $138.89 |         | 1/36 of the 5k |
| Computers & Equipment (asset) |         | $138.89 |                |

JE #3 (01/31/2026) - second depreciation JE

| Account                       | Debit   | Credit  | Notes          |
| ----------------------------- | ------- | ------- | -------------- |
| Depreciation (expense)        | $138.89 |         | 2/36 of the 5k |
| Computers & Equipment (asset) |         | $138.89 |                |

…

### Billpays

> I create a billpay for $50k knowing that my lawyers are billing me at the end of the month

Billpays! Billpays are exactly what they sound like, a bill that’s created in a system signaling an amount that you will pay at some point to some vendor. But, where the complexity lies, is that a billpay can be used to pay **anything.** The bookkeeping for each thing you’re trying to pay adds additional complexity in handling billpays.

Billpays are recorded in **Accounts Payable.**

The journal entry for this is relatively simple:

| Account                      | Debit   | Credit  |
| ---------------------------- | ------- | ------- |
| Legal (expense)              | $50,000 |         |
| Accounts Payable (liability) |         | $50,000 |

When the payment is actually initiated, we “match” the outstanding billpay to the payment and we record a new journal entry that pays down the AP and reduces our bank amount.

| Account                      | Debit   | Credit  |
| ---------------------------- | ------- | ------- |
| Accounts Payable (liability) | $50,000 |         |
| Bank (asset)                 |         | $50,000 |

### Prepaids

> I spent $500K upfront for a yearly subscription to Claude Code (AGI is here)

Here comes another new concept: **Prepaids.** You paid 500K upfront for a year worth of service. That cost gets amortized over 12 months. You have essentially “pre paid” for the subscription and over the course of the year, every month you are paying ~41.6k worth of services to Anthropic.

Another reason why prepaids are important is because the **Prepaid Expenses** account is an asset account. You haven’t used the 12 months of service yet, so that 500k is an asset waiting to be used. You’ve paid up front for a service that will be delivered over the course of 12 months.

This ends up looking very similar to fixed assets, where we book the initial transaction and create a prepaid schedule to book the amortizations.

The journal entry for the transaction on **12/01/2025**

| Account                  | Debit    | Credit   |
| ------------------------ | -------- | -------- |
| Prepaid Expenses (asset) | $500,000 |          |
| Ramp Card (liability)    |          | $500,000 |

The follow-on schedule journal entries:

JE #1 on 12/31/2025 - first prepaid schedule JE

| Account                  | Debit   | Credit  | Notes                                |
| ------------------------ | ------- | ------- | ------------------------------------ |
| Software & Web (expense) | $41,667 |         | 1/12 of 500k                         |
| Prepaid Expenses (asset) |         | $41,667 | 11 months of prepaid asset remaining |

There's more here like intangible fixed assets, accrued expenses, split spends, etc. but this should give you a high-level understanding of how expenses work.

---

## Revenue

Revenue is composed of invoices and revenue-related transactions at a company. It's an incredibly complex beast to fully grok. I’m going to explain the two main models of revenue accounting and how they relate together.

### Cash-basis revenue

Cash-basis revenue is exactly what it sounds like. Every time you make money, you simply book it straight to revenue. Let’s say on 12/01/2025 I signed a 3-year deal with Acme that starts at the beginning of next year, charging them $120k a year for 3 years. The moment they pay that $360k lumpsum, I would book that all to the month I closed them in. In my books, I’d see a $360k spike in the month they pay me, and then no revenue in subsequent or prior months.

There is no concept of a revenue schedule in cash basis. Creating invoices or contracts before hand do not create journal entries either. It simply boils down to, did we get paid for providing a service, and if we see a transaction that IS a revenue transaction (revenue, refund, dispute, etc.) book it to the right account on the date that we see it.

Simple cash-basis revenue JE on the date they paid:

| Account          | Debit    | Credit   |
| ---------------- | -------- | -------- |
| Cash (asset)     | $360,000 |          |
| Revenue (income) |          | $360,000 |

A lot of early stage startups just need cash-basis revenue because their revenue models are simple and they’re not signing large contracts. But the moment you do want to amortize the revenue, that’s where the second model comes in.

### Accrual revenue

Accrual revenue follows similar schedule-esque logic to fixed assets and prepaids with a twist. Revenue in accrual accounting is **not** booked on the cash transaction, it’s booked on the provision of service. If I have performed a service for you, I can book that as revenue even if I haven’t been paid for it yet.

**Invoices**

Companies create invoices to send to their customers asking for money. An invoice goes through a simple lifecycle:

1. Invoice sent (unpaid)
2. Revenue recognized (as service is provided)
3. Invoice paid

Let me walk through each stage using our Acme example: a 3-year deal starting January 1st, 2026, charging $120k/year ($10k/month) for a total contract value of $360k.

**Stage 1: Invoice Sent**

When you send an invoice to a customer, you’re creating Accounts Receivable (AR). AR is an asset account that tracks how much money customers owe you. On the other side sits Deferred Revenue (DR), a liability account representing money you’ve been promised but haven’t yet earned through service delivery.

On 01/01/2026 when we send the invoice:

| Account                      | Debit    | Credit   |
| ---------------------------- | -------- | -------- |
| Accounts Receivable (asset)  | $360,000 |          |
| Deferred Revenue (liability) |          | $360,000 |

At this point, you have $360k sitting in AR (an asset, because it’s money owed to you) and $360k in Deferred Revenue (a liability, because you owe Acme 3 years of service).

**Stage 2: Revenue Recognized**

Here’s the key principle of accrual accounting: you recognize revenue when you provide the service, not when you get paid. Every month that you deliver service to Acme, you “release” a portion of that deferred revenue into actual revenue.

On 01/31/2026 (after providing one month of service):

| Account                      | Debit   | Credit  |
| ---------------------------- | ------- | ------- |
| Deferred Revenue (liability) | $10,000 |         |
| Revenue (income)             |         | $10,000 |

This journal entry repeats every month for 36 months. You’re slowly converting that $360k liability (what you owe in services) into recognized revenue (what you’ve earned). By month 36, your Deferred Revenue balance hits zero and you’ve recognized the full $360k in revenue.

**Stage 3: Invoice Paid**

When Acme actually pays, you’re simply moving money from “promised” (AR) to “received” (Cash). This transaction has nothing to do with revenue recognition—it’s purely a balance sheet movement.

Let’s say Acme pays the full $360k upfront on 01/15/2026:

| Account                     | Debit    | Credit   |
| --------------------------- | -------- | -------- |
| Cash (asset)                | $360,000 |          |
| Accounts Receivable (asset) |          | $360,000 |

Notice there’s no revenue account touched here. In accrual accounting, cash collection is a separate event from revenue recognition.

**Why This Matters**

The distinction between cash-basis and accrual revenue has real implications for how your business looks on paper. With cash-basis, that $360k hits your books immediately. Great for showing traction, but misleading about your ongoing business. With accrual, your revenue reflects the actual delivery of service over time, giving you (and investors) a clearer picture of sustainable revenue generation.

Most early-stage startups start with cash-basis because it’s simpler and their contracts are small. But once you start signing larger, multi-year deals, accrual accounting becomes essential for understanding your true financial position.

---

## Payroll

Payroll is hell. Plain and simple. It seems so simple on the surface — “I’m going to pay my employees, here’s what I’m paying them, and here’s the JE we need to write.” And then you dig a little deeper, and you realize that the world of running payroll is incredibly complex.

There’s taxes and benefits deductions. There’s PEOs and international contractors. There’s deductions, there’s employer-side costs, there’s bonuses, there’s 401k match, there’s state level taxes, the list goes on. Each line item of every payroll needs to be correctly accounted for, a potential department needs to be applied, and a massive multi-line JE needs to be booked.

Let’s break down what actually happens when you run payroll.

**The Components of Payroll**

When you pay an employee, there are really three buckets of costs:

1. **Gross wages** — what the employee “earns” before anything is taken out
2. **Employee deductions** — taxes, benefits, 401k contributions that reduce the employee’s take-home pay
3. **Employer taxes and contributions** — additional costs the company pays on top of gross wages (FICA match, state unemployment, employer 401k match, health insurance contributions)

The employee sees their gross wages minus deductions as their net paycheck. But the company’s true cost is gross wages plus employer-side contributions.

> This idea is quite important when running payroll. The **total cost** of an employee isn't just the salary of the employee as one might think. The total cost of having an employee is their gross wages PLUS employer-side contributions.

Let’s say you’re paying an employee with:

- $10,000 gross salary for the month
- $2,000 in employee tax withholdings (federal, state, FICA)
- $500 in employee 401k contribution
- $765 in employer FICA match (7.65% of gross)
- $400 in employer health insurance contribution

> The employee’s net paycheck is $7,500 ($10,000 - $2,000 - $500).
> The company’s total cost is $11,165 ($10,000 + $765 + $400).

Here’s what an example JE might look like:

| Account                              | Debit   | Credit | Notes                                 |
| ------------------------------------ | ------- | ------ | ------------------------------------- |
| Salaries & Wages (expense)           | $10,000 |        |                                       |
| Payroll Taxes (expense)              | $765    |        |                                       |
| Health Insurance (expense)           | $400    |        |                                       |
| Payroll Tax Liabilities (liability)  |         | $2,765 | Employee withholdings + employer FICA |
| 401k Payable (liability)             |         | $500   |                                       |
| Health Insurance Payable (liability) |         | $400   |                                       |
| Cash (asset)                         |         | $7,500 | Net paycheck to employee              |

---

## Bank

Bank transactions are where the company starts. The first dollar of VC money that’s recorded as an entry into your ledger starts in the world of bank transactions.

Bank transactions are analyzed to figure out what classification they get. Is it a bank transaction for VC funding? Is it a bank transaction for a loan? Is it an internal transfer?

Each one of these bank transaction categories gets unique logic to handle the bookkeeping and subsequent artifacts that may be produced (loan and loan schedule for example).

---

# Reconciliations

All the bookkeeping we've discussed means nothing if the numbers in our system don't match reality. That's where reconciliations come in.

**Reconciliation is the process of comparing our internal records against external source data to confirm they match.** It's the accounting equivalent of "trust, but verify."

The reconciliation process:

1. Pull the ending balance from your GL account
2. Pull the ending balance from the source system (bank, credit card, payroll provider, etc.)
3. Compare the two—they should match
4. If they don't match, investigate the difference:
   - Timing differences (transaction recorded in different periods)
   - Missing transactions (in one system but not the other)
   - Errors (wrong amounts, duplicates, miscategorizations)
5. Make adjusting entries to correct any errors
6. Re-compute the ending balance in our GL account and confirm the two match

At month-end close, reconciliations are a critical checkpoint before generating financial statements. You never want to close the books until every major account has been reconciled to its source.

# Financial Statements

All the work we’ve done in categorizing transactions, booking journal entries and reconciling the accounts now culminate in the financial statements. These are the reports that tell the story of your business’s financial health.

There are three core financial statements:

- the Balance Sheet (what you own and owe at a point in time)
- the Income Statement (how much you made or lost over a period)
- the Cash Flow Statement (how cash moved through the business)

Each statement answers a different question, and together they give you the complete picture of the business.

### Balance Sheet

The balance sheet is a snapshot of your company’s financial position at a specific moment in time. It answers: what do we own, what do we owe, and what’s left over for the owners? The balance sheet is built on the fundamental accounting equation: **Assets = Liabilities + Equity**. This equation must always balance, hence the name. Assets are organized by liquidity (how quickly they can be converted to cash), and liabilities are organized by when they’re due.

| **Line Item**            | **What It Means**                                                                 |
| ------------------------ | --------------------------------------------------------------------------------- |
| Cash                     | Money in your bank accounts, immediately available                                |
| Accounts Receivable (AR) | Money customers owe you for invoices you’ve sent                                  |
| Prepaid Expenses         | Services you’ve paid for upfront but haven’t used yet (an asset until consumed)   |
| Fixed Assets (Net)       | Equipment, computers, furniture—minus accumulated depreciation                    |
| Accounts Payable (AP)    | Bills you’ve received but haven’t paid yet                                        |
| Accrued Expenses         | Expenses you’ve incurred but haven’t been billed for (e.g., end-of-month payroll) |
| Deferred Revenue         | Cash collected for services you haven’t delivered yet (a liability until earned)  |
| Paid-In Capital          | Money investors have put into the company                                         |
| Retained Earnings        | Cumulative profits or losses that haven’t been distributed to owners              |

### Income Statement (P&L)

The income statement (P&L) shows your financial performance over a period of time (a month, quarter, or year). It answers: did we make money or lose money, and where did it come from? The statement flows from top to bottom: you start with revenue, subtract costs in layers, and end with net income. The “margins” at each layer tell you how efficient different parts of your business are.

| **Line Item**             | **What It Means**                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------ |
| Revenue                   | The top line—money earned from your core business (subscriptions, services, sales)   |
| Cost of Goods Sold (COGS) | Direct costs of delivering your product (hosting, payment processing, support staff) |
| Gross Profit              | Revenue minus COGS—what’s left after direct costs                                    |
| Operating Expenses (OpEx) | Costs of running the business: R&D, Sales & Marketing, G&A                           |
| Operating Income (EBIT)   | Gross Profit minus OpEx—profitability of core operations before interest and taxes   |
| Net Income                | The bottom line—what’s left after all costs, interest, and taxes                     |

### Cash Flow Statement

The cash flow statement tracks the actual movement of cash in and out of the business over a period. It exists because the income statement can be misleading. You might book $100k in revenue, but if customers haven’t paid, you don’t have that cash. This statement reconciles net income to actual cash by adjusting for non-cash items and timing differences. It’s organized into three sections: cash from operations (your core business), cash from investing (buying/selling assets), and cash from financing (raising money, paying debt).

| **Line Item**                  | **What It Means**                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| Net Income                     | Starting point—pulled from the income statement                                       |
| Depreciation & Amortization    | Added back because it’s a non-cash expense (no cash left the business)                |
| Changes in AR                  | Increase = cash outflow (you booked revenue but didn’t collect); Decrease = inflow    |
| Changes in AP                  | Increase = cash inflow (you recorded expense but didn’t pay); Decrease = outflow      |
| Changes in Deferred Revenue    | Increase = cash inflow (collected cash before earning it); Decrease = outflow         |
| Cash from Operating Activities | Net cash generated (or burned) by running the business                                |
| Capital Expenditures (CapEx)   | Cash spent on fixed assets (equipment, computers)                                     |
| Cash from Financing Activities | Cash from investors, loans received, or loan/distribution payments made               |
| Net Change in Cash             | Sum of all sections—add to beginning cash to get ending cash (should match your bank) |

---

# Summary

And there you have it. Accounting in a nutshell. Go forth and explore a company's QuickBooks. Write some manual journal entries. You're ready for your CPA license. And if you forget anything, here’s a quick cheatsheet of terms (just hope you don’t get asked what a current asset is in an interview).

### Accounting Terms for the Muggle

| Term                                                | Definition                                                                                                        |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Accounts Payable (AP)**                           | Money you owe to vendors for goods or services received but not yet paid. A liability account.                    |
| **Accounts Receivable (AR)**                        | Money owed to you by customers for invoices you've sent but haven't collected yet. An asset account.              |
| **Accrual Accounting**                              | Revenue is recognized when earned and expenses when incurred, regardless of when cash moves. Required under GAAP. |
| **Amortization**                                    | Spreading a cost over time—used for intangible assets and prepaids (similar to depreciation for tangible assets). |
| **Annual Recurring Revenue (ARR)**                  | Annualized value of recurring subscription revenue. A key SaaS metric.                                            |
| **Cash-Basis Accounting**                           | Revenue and expenses recorded only when cash changes hands. Simpler but less accurate than accrual.               |
| **Chart of Accounts (COA)**                         | Master list of all account titles used in a business, organized by type. The "legend" for where transactions go.  |
| **Close the Books**                                 | Month-end process of finalizing all transactions, making adjustments, and preparing financial statements.         |
| **COGS (Cost of Goods Sold)**                       | Direct costs of delivering your product or service. Subtracted from revenue to get gross profit.                  |
| **Deferred Revenue**                                | Cash collected for services not yet delivered. A liability because you "owe" the customer the service.            |
| **Depreciation**                                    | Spreading the cost of a fixed asset over its useful life. A non-cash expense.                                     |
| **Double-Entry Bookkeeping**                        | System where every transaction has two entries (debit and credit) that must balance.                              |
| **GAAP (Generally Accepted Accounting Principles)** | Standardized accounting rules in the U.S., required for public companies.                                         |
| **General Ledger (GL)**                             | The complete, authoritative record of all financial transactions. The company's source of truth.                  |
| **Gross Profit**                                    | Revenue minus COGS. Shows profitability before operating expenses.                                                |
| **Journal Entry (JE)**                              | A record of a financial transaction with debits and credits that must balance. The atomic unit of accounting.     |
| **Net Income**                                      | The "bottom line"—revenue minus all expenses, interest, and taxes.                                                |
| **NetSuite**                                        | Enterprise accounting software used by larger companies and public companies.                                     |
| **Prepaid Expenses**                                | Payments made in advance for services not yet received. An asset until consumed.                                  |
| **QuickBooks (QB/QBO)**                             | Popular accounting software for small to mid-size businesses.                                                     |
| **Reconciliation**                                  | Comparing internal records against external source data to verify accuracy.                                       |
| **Revenue Recognition**                             | The principle determining when revenue can be recorded—generally when service is delivered.                       |
| **Runway**                                          | How long a company can operate before running out of cash. Cash ÷ Monthly Burn Rate.                              |
| **Trial Balance**                                   | Report listing all accounts and balances to verify total debits equal total credits before closing.               |
