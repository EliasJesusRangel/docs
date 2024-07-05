
{
  "modelName": "Internet Sales - No PII",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many sales this year\n",
  "engineResponse": {
    "query-id": "f4bffdbb-4ef4-4f12-a44d-673a550634c5",
    "metadata": {
      "succeeded": false,
      "wall-time": 6.448601545000001,
      "error-message": "Numeric value 'Calendar 2000' is not recognized"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `Sales Insights - BigQuery_main`.`Internet Sales - No PII` WHERE `Order YearWeek` = EXTRACT(YEAR FROM CURRENT_DATE)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_year\" = EXTRACT(YEAR FROM CURRENT_DATE);"
}

---

{
  "modelName": "Internet Sales - No PII",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many much was ordered from last year to now\n",
  "engineResponse": {
    "query-id": "9dc93246-42b7-4358-869b-176d4bcd5c4d",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.020220250000000002,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `orderquantity1`, `Order YearWeek` FROM `Sales Insights - BigQuery_main`.`Internet Sales - No PII` WHERE `Order YearWeek` = (SELECT MAX(`Order YearWeek`) FROM `Sales Insights - BigQuery_main`.`Internet Sales - No PII`) AND `Order YearWeek` - 1 = (SELECT MAX(`Order YearWeek`) - 1 FROM `Sales Insights - BigQuery_main`.`Internet Sales - No PII`)",
  "cleanedUpSql": "SELECT \"order_quantity\", \"order_year\" FROM atscaleTable WHERE \"order_year\" = (SELECT MAX(\"order_year\") FROM atscaleTable) AND \"order_year\" - 1 = (SELECT MAX(\"order_year\") - 1 FROM atscaleTable);"
}

---

{
  "modelName": "Internet Sales - No PII",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "What was the net value of sales since the beginning of the year?\n",
  "engineResponse": {
    "query-id": "fb43b048-d81d-4f44-b30d-b2b4b6e45ddc",
    "metadata": {
      "succeeded": false,
      "wall-time": 5.631701545,
      "error-message": "Numeric value 'Calendar 2000' is not recognized"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `Sales Insights - BigQuery_main`.`Internet Sales - No PII` WHERE `Order YearWeek` = EXTRACT(YEAR FROM CURRENT_DATE)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_year\" = EXTRACT(YEAR FROM CURRENT_DATE);"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "What was the net value of sales since the beginning of the year?\n",
  "engineResponse": {
    "query-id": "23c65536-8e28-4c52-9d55-ebe84f811ced",
    "metadata": {
      "succeeded": false,
      "wall-time": 6.180956336,
      "error-message": "Numeric value 'Calendar 2000' is not recognized"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `Sales Insights - BigQuery_main`.`Internet Sales` WHERE `Order YearWeek` = EXTRACT(YEAR FROM CURRENT_DATE)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_year\" = EXTRACT(YEAR FROM CURRENT_DATE);"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many sales this year?",
  "engineResponse": {
    "query-id": "e27c988c-a950-45c9-ad57-f91718fcbfee",
    "metadata": {
      "succeeded": false,
      "wall-time": 1.231445251,
      "error-message": "SQL compilation error: error line 9 at position 6\ninvalid identifier '\"datecustom_t20\".\"reporting_year_name\"'"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `Sales Insights - BigQuery_main`.`Internet Sales` WHERE `Order ReportIng_Year` = EXTRACT(YEAR FROM CURRENT_DATE)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_reporting_year\" = EXTRACT(YEAR FROM CURRENT_DATE);"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many sale last year?",
  "engineResponse": {
    "query-id": "d119ea15-ced5-4809-b4bb-a3f427983fdf",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.46163300100000004,
      "error-message": "SQL compilation error: error line 9 at position 6\ninvalid identifier '\"datecustom_t20\".\"reporting_year_name\"'"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `Sales Insights - BigQuery_main`.`Internet Sales` WHERE `Order ReportIng_Year` = (EXTRACT(YEAR FROM CURRENT_DATE) - 1)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_reporting_year\" = (EXTRACT(YEAR FROM CURRENT_DATE) - 1);"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many sales this year?",
  "engineResponse": {
    "query-id": "fca55647-0370-4812-8f00-aae0ee291820",
    "metadata": {
      "succeeded": false,
      "wall-time": 5.924016545000001,
      "error-message": "Numeric value 'Calendar 2000' is not recognized"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `sml-models_jeff_llm_testing`.`Internet Sales` WHERE `Order YearWeek` = EXTRACT(YEAR FROM CURRENT_DATE)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_year\" = EXTRACT(YEAR FROM CURRENT_DATE);"
}

---

{
  "modelName": "World Wide Importers",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many sales last year?",
  "engineResponse": {
    "query-id": "a526c149-eb9a-486d-b0e2-148918289d83",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.10657187500000001,
      "error-message": "Unknown column [sale_calendar_year]"
    }
  },
  "inboundQuery": "SELECT `m_Sale_Quantity_sum` FROM `sml-models_jeff_llm_testing`.`World Wide Importers` WHERE `sale_calendar_year` = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1)",
  "cleanedUpSql": "SELECT \"sale_quantity\" FROM atscaleTable WHERE \"sale_calendar_year\" = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1);"
}

---

{
  "modelName": "World Wide Importers",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many sales last year",
  "engineResponse": {
    "query-id": "7ec98d2e-10e5-4c59-b3bc-9d191a8fe2f1",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.039431126000000004,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `sale_calendar_year`, `m_Sale_Quantity_sum` FROM `sml-models_jeff_llm_testing`.`World Wide Importers` WHERE `sale_calendar_year` = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1)",
  "cleanedUpSql": "SELECT \"sale_calendar_year\", \"sale_quantity\" FROM atscaleTable WHERE \"sale_calendar_year\" = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1);"
}

---

{
  "modelName": "World Wide Importers",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "What was the time frame that sold the most units of any item?",
  "engineResponse": {
    "query-id": "5d9263f1-045d-4ea2-a4d9-5b38bb95013b",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.018441833,
      "error-message": "Unknown column [sale_calendar_year]"
    }
  },
  "inboundQuery": "SELECT `sale_calendar_year`, `sale_calendar_month`, `Sale Stock Item`, `m_Sale_Quantity_sum` \nFROM `sml-models_jeff_llm_testing`.`World Wide Importers` \nORDER BY `m_Sale_Quantity_sum` DESC LIMIT 1",
  "cleanedUpSql": "SELECT \"sale_calendar_year\", \"sale_calendar_month\", \"sale_stock_item\", \"sale_quantity\" \nFROM atscaleTable \nORDER BY \"sale_quantity\" DESC LIMIT 1;"
}

---

{
  "modelName": "World Wide Importers",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many units were sold between January and February in 2023 of any unit that is noticeable beyond the mean",
  "engineResponse": {
    "query-id": "afdfaa3f-0c0a-4909-9cfe-3bc77b97b362",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.051329042000000005,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `m_Sale_Quantity_sum`, `Sale Stock Item` \nFROM `sml-models_jeff_llm_testing`.`World Wide Importers` \nWHERE `sale_calendar_year` = 2023 \nAND `sale_calendar_month` IN (1, 2) \nAND `m_Sale_Quantity_sum` > (SELECT AVG(`m_Sale_Quantity_sum`) FROM `sml-models_jeff_llm_testing`.`World Wide Importers`)",
  "cleanedUpSql": "SELECT \"sale_quantity\", \"sale_stock_item\" \nFROM atscaleTable \nWHERE \"sale_calendar_year\" = 2023 \nAND \"sale_calendar_month\" IN (1, 2) \nAND \"sale_quantity\" > (SELECT AVG(\"sale_quantity\") FROM atscaleTable);"
}

---

{
  "modelName": "World Wide Importers",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "What was the biggest increase in units last year ",
  "engineResponse": {
    "query-id": "21b6e78f-5192-49a1-8dce-34424f25a43c",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.061598292000000006,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `Movement Calendar Year - WW`, `m_Quantity_sum` FROM `sml-models_jeff_llm_testing`.`World Wide Importers` WHERE `Movement Calendar Year - WW` = (SELECT MAX(`Movement Calendar Year - WW`) - 1 FROM `sml-models_jeff_llm_testing`.`World Wide Importers`) ORDER BY `m_Quantity_sum` DESC LIMIT 1",
  "cleanedUpSql": "SELECT \"movement_calendar_year\", \"movement_quantity\" FROM atscaleTable WHERE \"movement_calendar_year\" = (SELECT MAX(\"movement_calendar_year\") - 1 FROM atscaleTable) ORDER BY \"movement_quantity\" DESC LIMIT 1;"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "What was the last time period that over 1000000 units were distributed",
  "engineResponse": {
    "query-id": "72308c0a-a4d3-4e6b-ac56-e70e81a34454",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.01659225,
      "error-message": "Unknown column [order_custom_year]"
    }
  },
  "inboundQuery": "SELECT `order_custom_year`, `order_custom_quarter`, `order_custom_month`, `order_custom_week`, `Order Day_Date` \nFROM `Sales Insights - BigQuery_main`.`Internet Sales` \nWHERE `orderquantity1` > 1000000 \nORDER BY `Order Day_Date` DESC \nLIMIT 1",
  "cleanedUpSql": "SELECT \"order_custom_year\", \"order_custom_quarter\", \"order_custom_month\", \"order_custom_week\", \"order_day_date\" \nFROM atscaleTable \nWHERE \"order_quantity\" > 1000000 \nORDER BY \"order_day_date\" DESC \nLIMIT 1;"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many units sold in the first 25% of the year",
  "engineResponse": {
    "query-id": "4240be49-4cc5-44ce-9c87-522ac14d6e0b",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.012776083,
      "error-message": "Unknown column [order_custom_quarter]"
    }
  },
  "inboundQuery": "SELECT `orderquantity1` \nFROM `Sales Insights - BigQuery_main`.`Internet Sales` \nWHERE `order_custom_quarter` = 1",
  "cleanedUpSql": "SELECT \"order_quantity\" \nFROM atscaleTable \nWHERE \"order_custom_quarter\" = 1;"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many units sold last year before quarter 34",
  "engineResponse": {
    "query-id": "ca995817-16f3-452b-bed6-54f613103327",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.025354208000000003,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `orderquantity1`, `Order Quarter` FROM `Sales Insights - BigQuery_main`.`Internet Sales` WHERE `Order Quarter` < 34 AND `Order YearWeek` = (SELECT MAX(`Order YearWeek`) FROM `Sales Insights - BigQuery_main`.`Internet Sales`) - 1",
  "cleanedUpSql": "SELECT \"order_quantity\", \"order_quarter\" FROM atscaleTable WHERE \"order_quarter\" < 34 AND \"order_year\" = (SELECT MAX(\"order_year\") FROM atscaleTable) - 1;"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "Sales Insights - BigQuery_main",
  "userQuestion": "How many units sold last year before quarter 3",
  "engineResponse": {
    "query-id": "a676a1d4-4ee1-47ff-9425-429455bf2d87",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.043747208,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `orderquantity1`, `Order Quarter`, `Order YearWeek` FROM `Sales Insights - BigQuery_main`.`Internet Sales` WHERE `Order YearWeek` = (SELECT MAX(`Order YearWeek`) FROM `Sales Insights - BigQuery_main`.`Internet Sales`) - 1 AND `Order Quarter` < 3",
  "cleanedUpSql": "SELECT \"order_quantity\", \"order_quarter\", \"order_year\" FROM atscaleTable WHERE \"order_year\" = (SELECT MAX(\"order_year\") FROM atscaleTable) - 1 AND \"order_quarter\" < 3;"
}

---

{
  "modelName": "Internet Sales",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many sales last year.",
  "engineResponse": {
    "query-id": "a8c472a3-8533-495a-a882-867dea2434f0",
    "metadata": {
      "succeeded": false,
      "wall-time": 6.3655815030000005,
      "error-message": "Numeric value 'Reporting Calendar 2000' is not recognized"
    }
  },
  "inboundQuery": "SELECT `salesamount1` FROM `sml-models_jeff_llm_testing`.`Internet Sales` WHERE `Order ReportIng_Year` = (EXTRACT(YEAR FROM CURRENT_DATE) - 1)",
  "cleanedUpSql": "SELECT \"sales_amount\" FROM atscaleTable WHERE \"order_reporting_year\" = (EXTRACT(YEAR FROM CURRENT_DATE) - 1);"
}

---

{
  "modelName": "TPC-DS Benchmark Model",
  "catalogName": "sml-models_jeff_llm_testing",
  "userQuestion": "How many sales last year?\n",
  "engineResponse": {
    "query-id": "2fa72031-fce3-4be0-8448-6f8e9c6168b4",
    "metadata": {
      "succeeded": false,
      "wall-time": 0.016784458000000002,
      "error-message": "Don't understand constraint value: subqueryType: EXPRESSION\ntype: null\n of type class com.foundationdb.sql.parser.SubqueryNode also subqueryType: EXPRESSION\ntype: null\n"
    }
  },
  "inboundQuery": "SELECT `Sold Calendar Year`, `store_sales` FROM `sml-models_jeff_llm_testing`.`TPC-DS Benchmark Model` WHERE `Sold Calendar Year` = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1)",
  "cleanedUpSql": "SELECT \"sold_calendar_year\", \"store_sales\" FROM atscaleTable WHERE \"sold_calendar_year\" = (SELECT EXTRACT(YEAR FROM CURRENT_DATE) - 1);"
}

---

