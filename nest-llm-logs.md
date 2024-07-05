
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

