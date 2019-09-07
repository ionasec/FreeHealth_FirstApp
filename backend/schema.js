

{
    
    //https://data.medicare.gov/data/hospital-compare
    "hospitals": { "hospital_name" : "hospital_name", "hospital_url":"hospital_url"},
    
    //https://en.wikipedia.org/wiki/Healthcare_Common_Procedure_Coding_System
    "cpt" : {"cpt_code" : "cpt_code", "cpt_procedure": "cpt_procedure", "cpt_rvu" : "cpt_rvu"},

    //charge master from each hospitals
    "procedures" : {"charge_code" : "charge_code", "price":"price","description":"description","hospitals":"hospitals"},

    //https://en.wikipedia.org/wiki/ICD-10_Clinical_Modification
    "icd_cm" : {"icd_code":"icd_code", "icd_disease":"icd_disease" , "icd_description": "icd_description"},

    //https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/Part-B-National-Summary-Data-File/Overview.html
    "cms_statistics" : { "cpt_code": "cpt_code", "volume_count": "volume_count" , "volume_expanse" : "volume_expanse"}
}

