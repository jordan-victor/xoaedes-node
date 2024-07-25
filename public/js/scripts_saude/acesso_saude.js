//ARRAY DADOS INEP E EQUIPE
/*
const equipes = [
  {
    "cnes": 2012928,
    "equipe": "UBS CACILDA DE FREITAS"
  },
  {
    "cnes": 5665795,
    "equipe": "UBS UPP"
  },
  {
    "cnes": 461156,
    "equipe": "USF DESEMBARGADOR FABIO COUTO VALLE"
  },
  {
    "cnes": 2013916,
    "equipe": "USF DR ALFREDO CAMPOS"
  },
  {
    "cnes": 2013851,
    "equipe": "USF DR GILSON MOREIRA"
  },
  {
    "cnes": 2015285,
    "equipe": "USF DR JOSE AMAZONAS PALHANO"
  },
  {
    "cnes": 2017059,
    "equipe": "USF DR JOSE AVELINO PEREIRA"
  },
  {
    "cnes": 2014807,
    "equipe": "USF DR PLATAO ARAUJO"
  },
  {
    "cnes": 5613094,
    "equipe": "USF DR SILAS DE OLIVEIRA SANTOS"
  },
  {
    "cnes": 2013878,
    "equipe": "USF DR WALDIR BUGALHO DE MEDEIROS"
  },
  {
    "cnes": 2015447,
    "equipe": "USF DRA LUIZA DO CARMO RIBEIRO FERNANDES"
  },
  {
    "cnes": 3027163,
    "equipe": "USF ENFERMEIRA IVONE LIMA DOS SANTOS"
  },
  {
    "cnes": 5882664,
    "equipe": "USF ENFERMEIRA JOSEPHINA DE MELLO"
  },
  {
    "cnes": 2011921,
    "equipe": "USF GERALDO MAGELA"
  },
  {
    "cnes": 2015404,
    "equipe": "USF GUILHERME ALEXANDRE"
  },
  {
    "cnes": 2017075,
    "equipe": "USF JOAO NOGUEIRA DA MATTA"
  },
  {
    "cnes": 2015137,
    "equipe": "USF L-01"
  },
  {
    "cnes": 2015153,
    "equipe": "USF L-03"
  },
  {
    "cnes": 2015161,
    "equipe": "USF L-04"
  },
  {
    "cnes": 6352383,
    "equipe": "USF L-05"
  },
  {
    "cnes": 2015196,
    "equipe": "USF L-06"
  },
  {
    "cnes": 2015218,
    "equipe": "USF L-07"
  },
  {
    "cnes": 2015188,
    "equipe": "USF L-08"
  },
  {
    "cnes": 2015226,
    "equipe": "USF L-09"
  },
  {
    "cnes": 2015234,
    "equipe": "USF L-10"
  },
  {
    "cnes": 2015048,
    "equipe": "USF L-13"
  },
  {
    "cnes": 2015110,
    "equipe": "USF L-14"
  },
  {
    "cnes": 2014882,
    "equipe": "USF L-15"
  },
  {
    "cnes": 2015005,
    "equipe": "USF L-16"
  },
  {
    "cnes": 2015013,
    "equipe": "USF L-18"
  },
  {
    "cnes": 2014998,
    "equipe": "USF L-19"
  },
  {
    "cnes": 2014785,
    "equipe": "USF L-24"
  },
  {
    "cnes": 2014815,
    "equipe": "USF L-29"
  },
  {
    "cnes": 2014823,
    "equipe": "USF L-30"
  },
  {
    "cnes": 2014831,
    "equipe": "USF L-31"
  },
  {
    "cnes": 2014858,
    "equipe": "USF L-32"
  },
  {
    "cnes": 2014645,
    "equipe": "USF L-34"
  },
  {
    "cnes": 2014661,
    "equipe": "USF L-36"
  },
  {
    "cnes": 2015021,
    "equipe": "USF L-37"
  },
  {
    "cnes": 2013010,
    "equipe": "USF L-42"
  },
  {
    "cnes": 7476108,
    "equipe": "USF L-44"
  },
  {
    "cnes": 7416628,
    "equipe": "USF L-45"
  },
  {
    "cnes": 7238177,
    "equipe": "USF L-46"
  },
  {
    "cnes": 7726988,
    "equipe": "USF L-47"
  },
  {
    "cnes": 2015439,
    "equipe": "USF LAGO DO ALEIXO"
  },
  {
    "cnes": 2013800,
    "equipe": "USF MAUAZINHO"
  },
  {
    "cnes": 2011816,
    "equipe": "USF NOVA ESPERANCA"
  },
  {
    "cnes": 461091,
    "equipe": "USF SENADOR SEVERIANO NUNES"
  },
  {
    "cnes": 9718877,
    "equipe": "UBS CDPF"
  },
  {
    "cnes": 493619,
    "equipe": "UBS CDPM I"
  },
  {
    "cnes": 9721304,
    "equipe": "UBS CDPM II"
  },
  {
    "cnes": 9721274,
    "equipe": "UBS COMPAJ"
  },
  {
    "cnes": 9721290,
    "equipe": "UBS IPAT"
  },
  {
    "cnes": 2014742,
    "equipe": "USF ARTHUR VIRGILIO FILHO"
  },
  {
    "cnes": 2014750,
    "equipe": "USF AUGIAS GADELHA"
  },
  {
    "cnes": 115681,
    "equipe": "USF CARMEN NICOLAU"
  },
  {
    "cnes": 7594372,
    "equipe": "USF DR JOSE FIGLIUOLO"
  },
  {
    "cnes": 3027171,
    "equipe": "USF ENFERMEIRA ANNA BARRETO PEREIRA"
  },
  {
    "cnes": 7847866,
    "equipe": "USF FATIMA ANDRADE"
  },
  {
    "cnes": 2012898,
    "equipe": "USF FREI VALERIO DI CARLO"
  },
  {
    "cnes": 2013886,
    "equipe": "USF MJ PM SALVIO BELOTA"
  },
  {
    "cnes": 2015056,
    "equipe": "USF N-01"
  },
  {
    "cnes": 6905579,
    "equipe": "USF N-02"
  },
  {
    "cnes": 2015064,
    "equipe": "USF N-03"
  },
  {
    "cnes": 2015072,
    "equipe": "USF N-05"
  },
  {
    "cnes": 2015080,
    "equipe": "USF N-06"
  },
  {
    "cnes": 2015102,
    "equipe": "USF N-08"
  },
  {
    "cnes": 2015129,
    "equipe": "USF N-09"
  },
  {
    "cnes": 2014939,
    "equipe": "USF N-11"
  },
  {
    "cnes": 2014904,
    "equipe": "USF N-12"
  },
  {
    "cnes": 2013959,
    "equipe": "USF N-13"
  },
  {
    "cnes": 2013967,
    "equipe": "USF N-14"
  },
  {
    "cnes": 2013983,
    "equipe": "USF N-16"
  },
  {
    "cnes": 2014017,
    "equipe": "USF N-17"
  },
  {
    "cnes": 2014033,
    "equipe": "USF N-19"
  },
  {
    "cnes": 7035470,
    "equipe": "USF N-21"
  },
  {
    "cnes": 2014068,
    "equipe": "USF N-22"
  },
  {
    "cnes": 2014076,
    "equipe": "USF N-23"
  },
  {
    "cnes": 2014084,
    "equipe": "USF N-24"
  },
  {
    "cnes": 2014106,
    "equipe": "USF N-26"
  },
  {
    "cnes": 2014114,
    "equipe": "USF N-27"
  },
  {
    "cnes": 2014130,
    "equipe": "USF N-29"
  },
  {
    "cnes": 2017091,
    "equipe": "USF N-30"
  },
  {
    "cnes": 2014165,
    "equipe": "USF N-31"
  },
  {
    "cnes": 2014203,
    "equipe": "USF N-34"
  },
  {
    "cnes": 2014955,
    "equipe": "USF N-35"
  },
  {
    "cnes": 2014963,
    "equipe": "USF N-36"
  },
  {
    "cnes": 2019469,
    "equipe": "USF N-37"
  },
  {
    "cnes": 4004418,
    "equipe": "USF N-38"
  },
  {
    "cnes": 2014238,
    "equipe": "USF N-39"
  },
  {
    "cnes": 2014246,
    "equipe": "USF N-40"
  },
  {
    "cnes": 2014254,
    "equipe": "USF N-41"
  },
  {
    "cnes": 2014629,
    "equipe": "USF N-42"
  },
  {
    "cnes": 2014637,
    "equipe": "USF N-43"
  },
  {
    "cnes": 6767281,
    "equipe": "USF N-46"
  },
  {
    "cnes": 6795196,
    "equipe": "USF N-47"
  },
  {
    "cnes": 5046149,
    "equipe": "USF N-48"
  },
  {
    "cnes": 7207786,
    "equipe": "USF N-49"
  },
  {
    "cnes": 6925243,
    "equipe": "USF N-50"
  },
  {
    "cnes": 7400357,
    "equipe": "USF N-51"
  },
  {
    "cnes": 7096372,
    "equipe": "USF N-52"
  },
  {
    "cnes": 7096380,
    "equipe": "USF N-53"
  },
  {
    "cnes": 7212186,
    "equipe": "USF N-54"
  },
  {
    "cnes": 7172133,
    "equipe": "USF N-55"
  },
  {
    "cnes": 7212194,
    "equipe": "USF N-56"
  },
  {
    "cnes": 7622686,
    "equipe": "USF N-57"
  },
  {
    "cnes": 7622694,
    "equipe": "USF N-58"
  },
  {
    "cnes": 7500637,
    "equipe": "USF N-59"
  },
  {
    "cnes": 827681,
    "equipe": "USF N-60"
  },
  {
    "cnes": 4361601,
    "equipe": "USF PREFEITO AMAZONINO MENDES"
  },
  {
    "cnes": 461172,
    "equipe": "USF PROFESSOR CARLSON GRACIE"
  },
  {
    "cnes": 2011786,
    "equipe": "USF AJURICABA"
  },
  {
    "cnes": 2011794,
    "equipe": "USF BAIRRO DA PAZ"
  },
  {
    "cnes": 2013479,
    "equipe": "USF DEODATO DE MIRANDA LEAO"
  },
  {
    "cnes": 2015323,
    "equipe": "USF MANSOUR BULBOL"
  },
  {
    "cnes": 2013932,
    "equipe": "USF DOM MILTON CORREA"
  },
  {
    "cnes": 2013908,
    "equipe": "USF DR RAYOL DOS SANTOS"
  },
  {
    "cnes": 2015315,
    "equipe": "USF LEONOR DE FREITAS"
  },
  {
    "cnes": 2011948,
    "equipe": "USF LUIZ MONTENEGRO"
  },
  {
    "cnes": 4004388,
    "equipe": "USF MARIA IDA MENTONI"
  },
  {
    "cnes": 2014149,
    "equipe": "USF O-01"
  },
  {
    "cnes": 2015692,
    "equipe": "USF O-03"
  },
  {
    "cnes": 2015706,
    "equipe": "USF O-04"
  },
  {
    "cnes": 2015730,
    "equipe": "USF O-07"
  },
  {
    "cnes": 2015765,
    "equipe": "USF O-10"
  },
  {
    "cnes": 2015773,
    "equipe": "USF O-11"
  },
  {
    "cnes": 2016737,
    "equipe": "USF O-16"
  },
  {
    "cnes": 2015854,
    "equipe": "USF O-17"
  },
  {
    "cnes": 2015862,
    "equipe": "USF O-18"
  },
  {
    "cnes": 2016745,
    "equipe": "USF O-19"
  },
  {
    "cnes": 2015471,
    "equipe": "USF O-20"
  },
  {
    "cnes": 2015498,
    "equipe": "USF O-21"
  },
  {
    "cnes": 5949424,
    "equipe": "USF O-22"
  },
  {
    "cnes": 2015528,
    "equipe": "USF O-23"
  },
  {
    "cnes": 2015544,
    "equipe": "USF O-25"
  },
  {
    "cnes": 2015552,
    "equipe": "USF O-26"
  },
  {
    "cnes": 2015595,
    "equipe": "USF O-30"
  },
  {
    "cnes": 2015676,
    "equipe": "USF O-37"
  },
  {
    "cnes": 2015684,
    "equipe": "USF O-38"
  },
  {
    "cnes": 6810322,
    "equipe": "USF O-40"
  },
  {
    "cnes": 2012901,
    "equipe": "USF O-43"
  },
  {
    "cnes": 6825613,
    "equipe": "USF O-45"
  },
  {
    "cnes": 7163282,
    "equipe": "USF O-46"
  },
  {
    "cnes": 7476116,
    "equipe": "USF O-48"
  },
  {
    "cnes": 258490,
    "equipe": "USF O-53"
  },
  {
    "cnes": 4444892,
    "equipe": "USF PARQUE DAS TRIBOS"
  },
  {
    "cnes": 2011956,
    "equipe": "USF REDENCAO"
  },
  {
    "cnes": 5388376,
    "equipe": "USF SANTO ANTONIO"
  },
  {
    "cnes": 2014769,
    "equipe": "USF SAO VICENTE DE PAULO"
  },
  {
    "cnes": 2015307,
    "equipe": "USF VILA DA PRATA"
  },
  {
    "cnes": 2012863,
    "equipe": "USF ALMIR PEDREIRA"
  },
  {
    "cnes": 4478312,
    "equipe": "USF BENEDITO BATISTA DE ALMEIDA"
  },
  {
    "cnes": 2011808,
    "equipe": "USF BIANCA AGUIAR DE CARVALHO"
  },
  {
    "cnes": 2015420,
    "equipe": "USF DR ANTONIO REIS"
  },
  {
    "cnes": 2011743,
    "equipe": "USF DR JOSE RAYOL DOS SANTOS"
  },
  {
    "cnes": 2016702,
    "equipe": "USF DR LUIZ MONTENEGRO"
  },
  {
    "cnes": 2012847,
    "equipe": "USF FRANK ROSEMBERG CALDERON"
  },
  {
    "cnes": 2011735,
    "equipe": "USF JAPIIM"
  },
  {
    "cnes": 2012871,
    "equipe": "USF LOURENCO BORGHI"
  },
  {
    "cnes": 2013002,
    "equipe": "USF LUCIO FLAVIO DE VASCONCELOS DIAS"
  },
  {
    "cnes": 2011867,
    "equipe": "USF MEGUMO KADO"
  },
  {
    "cnes": 7740905,
    "equipe": "USF NILTON LINS"
  },
  {
    "cnes": 2013991,
    "equipe": "USF S-01"
  },
  {
    "cnes": 2016052,
    "equipe": "USF S-02"
  },
  {
    "cnes": 2014416,
    "equipe": "USF S-04"
  },
  {
    "cnes": 2014157,
    "equipe": "USF S-05"
  },
  {
    "cnes": 2015889,
    "equipe": "USF S-06"
  },
  {
    "cnes": 2014424,
    "equipe": "USF S-07"
  },
  {
    "cnes": 2014483,
    "equipe": "USF S-10"
  },
  {
    "cnes": 2014289,
    "equipe": "USF S-11"
  },
  {
    "cnes": 2014440,
    "equipe": "USF S-12"
  },
  {
    "cnes": 2014491,
    "equipe": "USF S-13"
  },
  {
    "cnes": 2014505,
    "equipe": "USF S-14"
  },
  {
    "cnes": 2014319,
    "equipe": "USF S-21"
  },
  {
    "cnes": 2014327,
    "equipe": "USF S-24"
  },
  {
    "cnes": 2015935,
    "equipe": "USF S-27"
  },
  {
    "cnes": 2015986,
    "equipe": "USF S-29"
  },
  {
    "cnes": 2014351,
    "equipe": "USF S-32"
  },
  {
    "cnes": 2015951,
    "equipe": "USF S-33"
  },
  {
    "cnes": 2014521,
    "equipe": "USF S-35"
  },
  {
    "cnes": 2015994,
    "equipe": "USF S-37"
  },
  {
    "cnes": 2014564,
    "equipe": "USF S-40"
  },
  {
    "cnes": 2014572,
    "equipe": "USF S-42"
  },
  {
    "cnes": 2016753,
    "equipe": "USF S-43"
  },
  {
    "cnes": 2016044,
    "equipe": "USF S-44"
  },
  {
    "cnes": 2014378,
    "equipe": "USF S-46"
  },
  {
    "cnes": 2014602,
    "equipe": "USF S-49"
  },
  {
    "cnes": 2014394,
    "equipe": "USF S-50"
  },
  {
    "cnes": 2014408,
    "equipe": "USF S-51"
  },
  {
    "cnes": 2014262,
    "equipe": "USF S-53"
  },
  {
    "cnes": 2013517,
    "equipe": "USF SANTA LUZIA"
  },
  {
    "cnes": 2013940,
    "equipe": "USF SAO FRANCISCO"
  },
  {
    "cnes": 2013843,
    "equipe": "USF THEODOMIRO GARRIDO"
  },
  {
    "cnes": 2013541,
    "equipe": "USF THEOMARIO PINTO DA COSTA"
  },
  {
    "cnes": 2013924,
    "equipe": "USF VICENTE PALLOTTI"
  },
  {
    "cnes": 2016060,
    "equipe": "USF FLUVIAL DR ANTONIO LEVINO"
  },
  {
    "cnes": 9518924,
    "equipe": "USF FLUVIAL DR NEY LACERDA"
  },
  {
    "cnes": 3809706,
    "equipe": "USF RURAL CONS ADA RODRIGUES VIANA"
  },
  {
    "cnes": 6355226,
    "equipe": "USF RURAL EPHIGENIO SALLES"
  },
  {
    "cnes": 2016079,
    "equipe": "USF RURAL NOSSA SENHORA AUXILIADORA"
  },
  {
    "cnes": 2016109,
    "equipe": "USF RURAL NOSSA SENHORA DE FATIMA"
  },
  {
    "cnes": 2016117,
    "equipe": "USF RURAL NOSSA SENHORA DO LIVRAMENTO"
  },
  {
    "cnes": 3809757,
    "equipe": "USF RURAL PAU ROSA"
  },
  {
    "cnes": 3808807,
    "equipe": "USF RURAL SAO PEDRO"
  },
  {
    "cnes": 6947867,
    "equipe": "UBS MOVEL 01"
  },
  {
    "cnes": 6947875,
    "equipe": "UBS MOVEL 02"
  },
  {
    "cnes": 6947948,
    "equipe": "UBS MOVEL 04"
  }
]
*/
const equipes = [
  {
    "cnes": 7092415,
    "equipe": "CAPS INFANTO JUVENIL LESTE"
  },
  {
    "cnes": 7741499,
    "equipe": "CEO LESTE PROFESSOR DR JAIR MACHADO SANTOS DA ROCHA"
  },
  {
    "cnes": 6421377,
    "equipe": "DISTRITO DE SAUDE LESTE"
  },
  {
    "cnes": 6648096,
    "equipe": "LABORATORIO DISTRITAL LESTE"
  },
  {
    "cnes": 2017865,
    "equipe": "POLICLINICA DR ANTONIO COMTE TELLES"
  },
  {
    "cnes": 2012928,
    "equipe": "UBS CACILDA DE FREITAS"
  },
  {
    "cnes": 5665795,
    "equipe": "UBS UPP"
  },
  {
    "cnes": 7011288,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 02"
  },
  {
    "cnes": 7020015,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 04"
  },
  {
    "cnes": 7020600,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 07"
  },
  {
    "cnes": 7019629,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 09"
  },
  {
    "cnes": 7508816,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 25"
  },
  {
    "cnes": 7508832,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 27"
  },
  {
    "cnes": 7508875,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 30"
  },
  {
    "cnes": 4265378,
    "equipe": "UNIDADE MOVEL DA MULHER 01"
  },
  {
    "cnes": 461156,
    "equipe": "USF DESEMBARGADOR FABIO COUTO VALLE"
  },
  {
    "cnes": 2013916,
    "equipe": "USF DR ALFREDO CAMPOS"
  },
  {
    "cnes": 2013851,
    "equipe": "USF DR GILSON MOREIRA"
  },
  {
    "cnes": 2015285,
    "equipe": "USF DR JOSE AMAZONAS PALHANO"
  },
  {
    "cnes": 2017059,
    "equipe": "USF DR JOSE AVELINO PEREIRA"
  },
  {
    "cnes": 2014807,
    "equipe": "USF DR PLATAO ARAUJO"
  },
  {
    "cnes": 5613094,
    "equipe": "USF DR SILAS DE OLIVEIRA SANTOS"
  },
  {
    "cnes": 2013878,
    "equipe": "USF DR WALDIR BUGALHO DE MEDEIROS"
  },
  {
    "cnes": 2015447,
    "equipe": "USF DRA LUIZA DO CARMO RIBEIRO FERNANDES"
  },
  {
    "cnes": 3027163,
    "equipe": "USF ENFERMEIRA IVONE LIMA DOS SANTOS"
  },
  {
    "cnes": 5882664,
    "equipe": "USF ENFERMEIRA JOSEPHINA DE MELLO"
  },
  {
    "cnes": 2011921,
    "equipe": "USF GERALDO MAGELA"
  },
  {
    "cnes": 2015404,
    "equipe": "USF GUILHERME ALEXANDRE"
  },
  {
    "cnes": 2017075,
    "equipe": "USF JOAO NOGUEIRA DA MATTA"
  },
  {
    "cnes": 2015137,
    "equipe": "USF L-01"
  },
  {
    "cnes": 2015153,
    "equipe": "USF L-03"
  },
  {
    "cnes": 2015161,
    "equipe": "USF L-04"
  },
  {
    "cnes": 6352383,
    "equipe": "USF L-05"
  },
  {
    "cnes": 2015196,
    "equipe": "USF L-06"
  },
  {
    "cnes": 2015218,
    "equipe": "USF L-07"
  },
  {
    "cnes": 2015188,
    "equipe": "USF L-08"
  },
  {
    "cnes": 2015226,
    "equipe": "USF L-09"
  },
  {
    "cnes": 2015234,
    "equipe": "USF L-10"
  },
  {
    "cnes": 2015048,
    "equipe": "USF L-13"
  },
  {
    "cnes": 2015110,
    "equipe": "USF L-14"
  },
  {
    "cnes": 2014882,
    "equipe": "USF L-15"
  },
  {
    "cnes": 2015005,
    "equipe": "USF L-16"
  },
  {
    "cnes": 2015013,
    "equipe": "USF L-18"
  },
  {
    "cnes": 2014998,
    "equipe": "USF L-19"
  },
  {
    "cnes": 2014785,
    "equipe": "USF L-24"
  },
  {
    "cnes": 2014815,
    "equipe": "USF L-29"
  },
  {
    "cnes": 2014823,
    "equipe": "USF L-30"
  },
  {
    "cnes": 2014831,
    "equipe": "USF L-31"
  },
  {
    "cnes": 2014858,
    "equipe": "USF L-32"
  },
  {
    "cnes": 2014645,
    "equipe": "USF L-34"
  },
  {
    "cnes": 2014661,
    "equipe": "USF L-36"
  },
  {
    "cnes": 2015021,
    "equipe": "USF L-37"
  },
  {
    "cnes": 2013010,
    "equipe": "USF L-42"
  },
  {
    "cnes": 7476108,
    "equipe": "USF L-44"
  },
  {
    "cnes": 7416628,
    "equipe": "USF L-45"
  },
  {
    "cnes": 7238177,
    "equipe": "USF L-46"
  },
  {
    "cnes": 7726988,
    "equipe": "USF L-47"
  },
  {
    "cnes": 2015439,
    "equipe": "USF LAGO DO ALEIXO"
  },
  {
    "cnes": 2013800,
    "equipe": "USF MAUAZINHO"
  },
  {
    "cnes": 2011816,
    "equipe": "USF NOVA ESPERANCA"
  },
  {
    "cnes": 461091,
    "equipe": "USF SENADOR SEVERIANO NUNES"
  },
  {
    "cnes": 9718877,
    "equipe": "CENTRO DE DETENCAO FEMININO CDF"
  },
  {
    "cnes": 5377463,
    "equipe": "CEO NORTE DR RUBIM SA"
  },
  {
    "cnes": 6421369,
    "equipe": "DISTRITO DE SAUDE NORTE"
  },
  {
    "cnes": 5592011,
    "equipe": "LABORATORIO DISTRITAL NORTE PROFESSOR MANOEL BASTOS LIRA"
  },
  {
    "cnes": 2017040,
    "equipe": "POLICLINICA DR JOSE ANTONIO DA SILVA"
  },
  {
    "cnes": 493619,
    "equipe": "UBS CDPM I"
  },
  {
    "cnes": 9721304,
    "equipe": "UBS CDPM II"
  },
  {
    "cnes": 9721274,
    "equipe": "UBS COMPAJ"
  },
  {
    "cnes": 9721290,
    "equipe": "UBS IPAT"
  },
  {
    "cnes": 7019548,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 05"
  },
  {
    "cnes": 7019572,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 06"
  },
  {
    "cnes": 7020511,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 05"
  },
  {
    "cnes": 7020058,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 06"
  },
  {
    "cnes": 7020619,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 08"
  },
  {
    "cnes": 7019637,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 10"
  },
  {
    "cnes": 7020090,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 11"
  },
  {
    "cnes": 7020775,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 15"
  },
  {
    "cnes": 7020813,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 18"
  },
  {
    "cnes": 7509383,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 20"
  },
  {
    "cnes": 7508808,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 24"
  },
  {
    "cnes": 7508891,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 32"
  },
  {
    "cnes": 7508905,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 33"
  },
  {
    "cnes": 4265440,
    "equipe": "UNIDADE MOVEL DA MULHER 02"
  },
  {
    "cnes": 2014742,
    "equipe": "USF ARTHUR VIRGILIO FILHO"
  },
  {
    "cnes": 2014750,
    "equipe": "USF AUGIAS GADELHA"
  },
  {
    "cnes": 115681,
    "equipe": "USF CARMEN NICOLAU"
  },
  {
    "cnes": 7594372,
    "equipe": "USF DR. JOSE FIGLIUOLO"
  },
  {
    "cnes": 3027171,
    "equipe": "USF ENFERMEIRA ANNA BARRETO PEREIRA"
  },
  {
    "cnes": 7847866,
    "equipe": "USF FATIMA ANDRADE"
  },
  {
    "cnes": 2012898,
    "equipe": "USF FREI VALERIO DI CARLO"
  },
  {
    "cnes": 2013886,
    "equipe": "USF MJ PM SALVIO BELOTA"
  },
  {
    "cnes": 2015056,
    "equipe": "USF N-01"
  },
  {
    "cnes": 6905579,
    "equipe": "USF N-02"
  },
  {
    "cnes": 2015064,
    "equipe": "USF N-03"
  },
  {
    "cnes": 2015072,
    "equipe": "USF N-05"
  },
  {
    "cnes": 2015080,
    "equipe": "USF N-06"
  },
  {
    "cnes": 2015102,
    "equipe": "USF N-08"
  },
  {
    "cnes": 2015129,
    "equipe": "USF N-09"
  },
  {
    "cnes": 2014939,
    "equipe": "USF N-11"
  },
  {
    "cnes": 2014904,
    "equipe": "USF N-12"
  },
  {
    "cnes": 2013959,
    "equipe": "USF N-13"
  },
  {
    "cnes": 2013967,
    "equipe": "USF N-14"
  },
  {
    "cnes": 2013983,
    "equipe": "USF N-16"
  },
  {
    "cnes": 2014017,
    "equipe": "USF N-17"
  },
  {
    "cnes": 2014033,
    "equipe": "USF N-19"
  },
  {
    "cnes": 7035470,
    "equipe": "USF N-21"
  },
  {
    "cnes": 2014068,
    "equipe": "USF N-22"
  },
  {
    "cnes": 2014076,
    "equipe": "USF N-23"
  },
  {
    "cnes": 2014084,
    "equipe": "USF N-24"
  },
  {
    "cnes": 2014106,
    "equipe": "USF N-26"
  },
  {
    "cnes": 2014114,
    "equipe": "USF N-27"
  },
  {
    "cnes": 2014130,
    "equipe": "USF N-29"
  },
  {
    "cnes": 2017091,
    "equipe": "USF N-30"
  },
  {
    "cnes": 2014165,
    "equipe": "USF N-31"
  },
  {
    "cnes": 2014203,
    "equipe": "USF N-34"
  },
  {
    "cnes": 2014955,
    "equipe": "USF N-35"
  },
  {
    "cnes": 2014963,
    "equipe": "USF N-36"
  },
  {
    "cnes": 2019469,
    "equipe": "USF N-37"
  },
  {
    "cnes": 4004418,
    "equipe": "USF N-38"
  },
  {
    "cnes": 2014238,
    "equipe": "USF N-39"
  },
  {
    "cnes": 2014246,
    "equipe": "USF N-40"
  },
  {
    "cnes": 2014254,
    "equipe": "USF N-41"
  },
  {
    "cnes": 2014629,
    "equipe": "USF N-42"
  },
  {
    "cnes": 2014637,
    "equipe": "USF N-43"
  },
  {
    "cnes": 6767281,
    "equipe": "USF N-46"
  },
  {
    "cnes": 6795196,
    "equipe": "USF N-47"
  },
  {
    "cnes": 5046149,
    "equipe": "USF N-48"
  },
  {
    "cnes": 7207786,
    "equipe": "USF N-49"
  },
  {
    "cnes": 6925243,
    "equipe": "USF N-50"
  },
  {
    "cnes": 7400357,
    "equipe": "USF N-51"
  },
  {
    "cnes": 7096372,
    "equipe": "USF N-52"
  },
  {
    "cnes": 7096380,
    "equipe": "USF N-53"
  },
  {
    "cnes": 7212186,
    "equipe": "USF N-54"
  },
  {
    "cnes": 7172133,
    "equipe": "USF N-55"
  },
  {
    "cnes": 7212194,
    "equipe": "USF N-56"
  },
  {
    "cnes": 7622686,
    "equipe": "USF N-57"
  },
  {
    "cnes": 7622694,
    "equipe": "USF N-58"
  },
  {
    "cnes": 7500637,
    "equipe": "USF N-59"
  },
  {
    "cnes": 827681,
    "equipe": "USF N-60"
  },
  {
    "cnes": 4361601,
    "equipe": "USF PREFEITO AMAZONINO MENDES"
  },
  {
    "cnes": 4636511,
    "equipe": "USF PREFEITO FRANK ABRAHIM LIMA"
  },
  {
    "cnes": 461172,
    "equipe": "USF PROFESSOR CARLSON GRACIE"
  },
  {
    "cnes": 9607625,
    "equipe": "CENTRO DE CONTROLE DE ZOONOSES DR CARLOS DURAND"
  },
  {
    "cnes": 5356989,
    "equipe": "CEO OESTE PROFESSOR JOAO LUIS RIBEIRO MENDONCA"
  },
  {
    "cnes": 147664,
    "equipe": "DIR VIGILANCIA AMBIENTAL E EPIDEMIOLOGICA"
  },
  {
    "cnes": 6421393,
    "equipe": "DISTRITO DE SAUDE OESTE"
  },
  {
    "cnes": 147656,
    "equipe": "DIVISAO DO CENTRO DE EMISSAO DE DECLARACAO DE OBITOS"
  },
  {
    "cnes": 5357004,
    "equipe": "DIVISAO DO CENTRO REGIONAL DE SAUDE TRABALHADOR"
  },
  {
    "cnes": 188468,
    "equipe": "GERENCIA DE IMUNIZACAO"
  },
  {
    "cnes": 6767265,
    "equipe": "LABORATORIO DISTRITAL OESTE"
  },
  {
    "cnes": 2012480,
    "equipe": "MATERNIDADE DR MOURA TAPAJOZ"
  },
  {
    "cnes": 2014610,
    "equipe": "POLICLINICA DR DJALMA BATISTA"
  },
  {
    "cnes": 7019505,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 04"
  },
  {
    "cnes": 7019599,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 07"
  },
  {
    "cnes": 7018762,
    "equipe": "UNIDADE DE SUPORTE AVANCADO FLUVIAL - USAF 01"
  },
  {
    "cnes": 7018843,
    "equipe": "UNIDADE DE SUPORTE AVANCADO FLUVIAL - USAF 02"
  },
  {
    "cnes": 7020724,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 13"
  },
  {
    "cnes": 7019904,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 14"
  },
  {
    "cnes": 7020783,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 16"
  },
  {
    "cnes": 7020139,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 17"
  },
  {
    "cnes": 7508794,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 23"
  },
  {
    "cnes": 7508859,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 28"
  },
  {
    "cnes": 7508867,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 29"
  },
  {
    "cnes": 7508913,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 34"
  },
  {
    "cnes": 7020295,
    "equipe": "UNIDADE DE SUPORTE DE MOTO - MT 05"
  },
  {
    "cnes": 4265394,
    "equipe": "UNIDADE MOVEL DA MULHER 03"
  },
  {
    "cnes": 2011786,
    "equipe": "USF AJURICABA"
  },
  {
    "cnes": 2011794,
    "equipe": "USF BAIRRO DA PAZ"
  },
  {
    "cnes": 2013479,
    "equipe": "USF DEODATO DE MIRANDA LEAO"
  },
  {
    "cnes": 2013932,
    "equipe": "USF DOM MILTON CORREA"
  },
  {
    "cnes": 2013908,
    "equipe": "USF DR RAYOL DOS SANTOS"
  },
  {
    "cnes": 2015315,
    "equipe": "USF LEONOR DE FREITAS"
  },
  {
    "cnes": 2011948,
    "equipe": "USF LUIZ MONTENEGRO"
  },
  {
    "cnes": 2015323,
    "equipe": "USF MANSOUR BULBOL"
  },
  {
    "cnes": 4004388,
    "equipe": "USF MARIA IDA MENTONI"
  },
  {
    "cnes": 2014149,
    "equipe": "USF O-01"
  },
  {
    "cnes": 2015692,
    "equipe": "USF O-03"
  },
  {
    "cnes": 2015706,
    "equipe": "USF O-04"
  },
  {
    "cnes": 2015730,
    "equipe": "USF O-07"
  },
  {
    "cnes": 2015765,
    "equipe": "USF O-10"
  },
  {
    "cnes": 2015773,
    "equipe": "USF O-11"
  },
  {
    "cnes": 2016737,
    "equipe": "USF O-16"
  },
  {
    "cnes": 2015854,
    "equipe": "USF O-17"
  },
  {
    "cnes": 2015862,
    "equipe": "USF O-18"
  },
  {
    "cnes": 2016745,
    "equipe": "USF O-19"
  },
  {
    "cnes": 2015471,
    "equipe": "USF O-20"
  },
  {
    "cnes": 2015498,
    "equipe": "USF O-21"
  },
  {
    "cnes": 5949424,
    "equipe": "USF O-22"
  },
  {
    "cnes": 2015528,
    "equipe": "USF O-23"
  },
  {
    "cnes": 2015544,
    "equipe": "USF O-25"
  },
  {
    "cnes": 2015552,
    "equipe": "USF O-26"
  },
  {
    "cnes": 2015595,
    "equipe": "USF O-30"
  },
  {
    "cnes": 2015676,
    "equipe": "USF O-37"
  },
  {
    "cnes": 2015684,
    "equipe": "USF O-38"
  },
  {
    "cnes": 6810322,
    "equipe": "USF O-40"
  },
  {
    "cnes": 2012901,
    "equipe": "USF O-43"
  },
  {
    "cnes": 6825613,
    "equipe": "USF O-45"
  },
  {
    "cnes": 7163282,
    "equipe": "USF O-46"
  },
  {
    "cnes": 7476116,
    "equipe": "USF O-48"
  },
  {
    "cnes": 258490,
    "equipe": "USF O-53"
  },
  {
    "cnes": 4444892,
    "equipe": "USF PARQUE DAS TRIBOS"
  },
  {
    "cnes": 2011956,
    "equipe": "USF REDENCAO"
  },
  {
    "cnes": 5388376,
    "equipe": "USF SANTO ANTONIO"
  },
  {
    "cnes": 2014769,
    "equipe": "USF SAO VICENTE DE PAULO"
  },
  {
    "cnes": 2015307,
    "equipe": "USF VILA DA PRATA"
  },
  {
    "cnes": 7847718,
    "equipe": "CAPS III AD DR AFRANIO SOARES"
  },
  {
    "cnes": 6463525,
    "equipe": "CAPS III BENJAMIM MATIAS FERNANDES"
  },
  {
    "cnes": 460923,
    "equipe": "CAPS INFANTO JUVENIL SUL"
  },
  {
    "cnes": 5866081,
    "equipe": "CENTRAL DE REGULACAO REGIONAL DE MANAUS"
  },
  {
    "cnes": 3981304,
    "equipe": "CENTRAL DE REGULACAO SAMU 192 REGIONAL MANAUS"
  },
  {
    "cnes": 5405718,
    "equipe": "CEO SUL DR JOSE FORTUNATO DE OLIVEIRA"
  },
  {
    "cnes": 5889545,
    "equipe": "CER II PROFESSOR ROLLS GRACIE- FISICO E INTELECTUAL"
  },
  {
    "cnes": 2012979,
    "equipe": "DIRETORIA DE VIGILANCIA SANITARIA"
  },
  {
    "cnes": 6421385,
    "equipe": "DISTRITO DE SAUDE SUL"
  },
  {
    "cnes": 797863,
    "equipe": "GERENCIA DE TELESSAUDE"
  },
  {
    "cnes": 5592100,
    "equipe": "LABORATORIO DE CITOLOGIA PROF SEBASTIAO FERREIRA MARINHO"
  },
  {
    "cnes": 9624430,
    "equipe": "LABORATORIO DE VIGILANCIA DR EDIVAR DOS SANTOS FERNANDES"
  },
  {
    "cnes": 7149891,
    "equipe": "LABORATORIO DISTRITAL SUL"
  },
  {
    "cnes": 6541445,
    "equipe": "SECRETARIA MUNICIPAL DE SAUDE DE MANAUS"
  },
  {
    "cnes": 7019262,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 01"
  },
  {
    "cnes": 7019459,
    "equipe": "UNIDADE DE SUPORTE AVANCADO - USA 03"
  },
  {
    "cnes": 7018649,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 01"
  },
  {
    "cnes": 7020414,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 02"
  },
  {
    "cnes": 7020422,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 03"
  },
  {
    "cnes": 7020716,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 12"
  },
  {
    "cnes": 7508921,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 19"
  },
  {
    "cnes": 7508743,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 21"
  },
  {
    "cnes": 7508751,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 22"
  },
  {
    "cnes": 7508824,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 26"
  },
  {
    "cnes": 7508883,
    "equipe": "UNIDADE DE SUPORTE BASICO - USB 31"
  },
  {
    "cnes": 7018916,
    "equipe": "UNIDADE DE SUPORTE DE MOTO - MT 01"
  },
  {
    "cnes": 7019998,
    "equipe": "UNIDADE DE SUPORTE DE MOTO - MT 02"
  },
  {
    "cnes": 7020287,
    "equipe": "UNIDADE DE SUPORTE DE MOTO - MT 03"
  },
  {
    "cnes": 7020198,
    "equipe": "UNIDADE DE SUPORTE DE MOTO - MT 04"
  },
  {
    "cnes": 4559886,
    "equipe": "UNIDADE MOVEL DA MULHER 04"
  },
  {
    "cnes": 6772358,
    "equipe": "UNIDADE MOVEL ODONTOLOGICA E OFTALMOLOGICA - PSE"
  },
  {
    "cnes": 2012863,
    "equipe": "USF ALMIR PEDREIRA"
  },
  {
    "cnes": 4478312,
    "equipe": "USF BENEDITO BATISTA DE ALMEIDA"
  },
  {
    "cnes": 2011808,
    "equipe": "USF BIANCA AGUIAR DE CARVALHO"
  },
  {
    "cnes": 2015420,
    "equipe": "USF DR ANTONIO REIS"
  },
  {
    "cnes": 2011743,
    "equipe": "USF DR JOSE RAYOL DOS SANTOS"
  },
  {
    "cnes": 2016702,
    "equipe": "USF DR LUIZ MONTENEGRO"
  },
  {
    "cnes": 2012847,
    "equipe": "USF FRANK ROSEMBERG CALDERON"
  },
  {
    "cnes": 2011735,
    "equipe": "USF JAPIIM"
  },
  {
    "cnes": 2012871,
    "equipe": "USF LOURENCO BORGHI"
  },
  {
    "cnes": 2013002,
    "equipe": "USF LUCIO FLAVIO DE VASCONCELOS DIAS"
  },
  {
    "cnes": 2011867,
    "equipe": "USF MEGUMO KADO"
  },
  {
    "cnes": 7740905,
    "equipe": "USF NILTON LINS"
  },
  {
    "cnes": 2013991,
    "equipe": "USF S-01"
  },
  {
    "cnes": 2016052,
    "equipe": "USF S-02"
  },
  {
    "cnes": 2014416,
    "equipe": "USF S-04"
  },
  {
    "cnes": 2014157,
    "equipe": "USF S-05"
  },
  {
    "cnes": 2015889,
    "equipe": "USF S-06"
  },
  {
    "cnes": 2014424,
    "equipe": "USF S-07"
  },
  {
    "cnes": 2014483,
    "equipe": "USF S-10"
  },
  {
    "cnes": 2014289,
    "equipe": "USF S-11"
  },
  {
    "cnes": 2014440,
    "equipe": "USF S-12"
  },
  {
    "cnes": 2014491,
    "equipe": "USF S-13"
  },
  {
    "cnes": 2014505,
    "equipe": "USF S-14"
  },
  {
    "cnes": 2014319,
    "equipe": "USF S-21"
  },
  {
    "cnes": 2014327,
    "equipe": "USF S-24"
  },
  {
    "cnes": 2015935,
    "equipe": "USF S-27"
  },
  {
    "cnes": 2015986,
    "equipe": "USF S-29"
  },
  {
    "cnes": 2014351,
    "equipe": "USF S-32"
  },
  {
    "cnes": 2015951,
    "equipe": "USF S-33"
  },
  {
    "cnes": 2014521,
    "equipe": "USF S-35"
  },
  {
    "cnes": 2015994,
    "equipe": "USF S-37"
  },
  {
    "cnes": 2014564,
    "equipe": "USF S-40"
  },
  {
    "cnes": 2014572,
    "equipe": "USF S-42"
  },
  {
    "cnes": 2016753,
    "equipe": "USF S-43"
  },
  {
    "cnes": 2016044,
    "equipe": "USF S-44"
  },
  {
    "cnes": 2014378,
    "equipe": "USF S-46"
  },
  {
    "cnes": 2014602,
    "equipe": "USF S-49"
  },
  {
    "cnes": 2014394,
    "equipe": "USF S-50"
  },
  {
    "cnes": 2014408,
    "equipe": "USF S-51"
  },
  {
    "cnes": 2014262,
    "equipe": "USF S-53"
  },
  {
    "cnes": 2013517,
    "equipe": "USF SANTA LUZIA"
  },
  {
    "cnes": 2013940,
    "equipe": "USF SAO FRANCISCO"
  },
  {
    "cnes": 2013541,
    "equipe": "USF THEOMARIO PINTO DA COSTA"
  },
  {
    "cnes": 2013924,
    "equipe": "USF VICENTE PALLOTTI"
  },
  {
    "cnes": 6808034,
    "equipe": "DISTRITO DE SAUDE RURAL"
  },
  {
    "cnes": 2015358,
    "equipe": "UNIDADE DE APOIO RURAL APUAU"
  },
  {
    "cnes": 2015390,
    "equipe": "UNIDADE DE APOIO RURAL COSTA DO ARARA"
  },
  {
    "cnes": 3848639,
    "equipe": "UNIDADE DE APOIO RURAL CUIEIRAS"
  },
  {
    "cnes": 2012952,
    "equipe": "UNIDADE DE APOIO RURAL JATUARANA"
  },
  {
    "cnes": 2016087,
    "equipe": "UNIDADE DE APOIO RURAL LAGO DO ARUMA"
  },
  {
    "cnes": 2015382,
    "equipe": "UNIDADE DE APOIO RURAL MIPINDIAU"
  },
  {
    "cnes": 2012960,
    "equipe": "UNIDADE DE APOIO RURAL NOSSA SENHORA DO CARMO"
  },
  {
    "cnes": 2012987,
    "equipe": "UNIDADE DE APOIO RURAL NOSSA SENHORA DO PERPETUO SOCORRO"
  },
  {
    "cnes": 2015366,
    "equipe": "UNIDADE DE APOIO RURAL SANTA MARIA"
  },
  {
    "cnes": 2012936,
    "equipe": "UNIDADE DE APOIO RURAL TABOCAL BONSUCESSO"
  },
  {
    "cnes": 2012944,
    "equipe": "UNIDADE DE APOIO RURAL TABOCAL GUAJARA"
  },
  {
    "cnes": 4559894,
    "equipe": "UNIDADE MOVEL DA MULHER 05"
  },
  {
    "cnes": 2016060,
    "equipe": "USF FLUVIAL DR ANTONIO LEVINO"
  },
  {
    "cnes": 9518924,
    "equipe": "USF FLUVIAL DR NEY LACERDA"
  },
  {
    "cnes": 3809706,
    "equipe": "USF RURAL CONS ADA RODRIGUES VIANA"
  },
  {
    "cnes": 6355226,
    "equipe": "USF RURAL EPHIGENIO SALLES"
  },
  {
    "cnes": 2016079,
    "equipe": "USF RURAL NOSSA SENHORA AUXILIADORA"
  },
  {
    "cnes": 2016109,
    "equipe": "USF RURAL NOSSA SENHORA DE FATIMA"
  },
  {
    "cnes": 2016117,
    "equipe": "USF RURAL NOSSA SENHORA DO LIVRAMENTO"
  },
  {
    "cnes": 3809757,
    "equipe": "USF RURAL PAU ROSA"
  },
  {
    "cnes": 3808807,
    "equipe": "USF RURAL SAO PEDRO"
  },
  {
    "cnes": 7788592,
    "equipe": "CENTRO SOCIOEDUCATIVO ASSISTENTE SOCIAL DAGMAR FEITOZA"
  },
  {
    "cnes": 7788606,
    "equipe": "CENTRO SOCIOEDUCATIVO DE INTERNACAO FEMININA"
  },
  {
    "cnes": 7788622,
    "equipe": "CENTRO SOCIOEDUCATIVO SEMILIBERDADE MASCULINO"
  },
  {
    "cnes": 7788614,
    "equipe": "CENTRO SOCIOEDUCATIVO SENADOR RAIMUNDO PARENTE"
  },
  {
    "cnes": 7071892,
    "equipe": "FUNDACAO APOIO AO IDOSO DR THOMAS"
  },
  {
    "cnes": 7788630,
    "equipe": "UNIDADE DE INTERNACAO PROVISORIA"
  }
]

//VALIDAÇÃO DO INE
let ineInput = document.getElementById("ine_saude")
ineInput.addEventListener('input', ()=>{
  let ine = document.getElementById("ine_saude").value
  let ine_status = document.getElementById("ine_status")
  let equipe_saude = document.getElementById("equipe_saude")
  let validaIne = "invalido"

  equipes.forEach(equipe=>{
    if(equipe.cnes == ine){
      ine_status.innerHTML = equipe.equipe
      equipe_saude.value = equipe.equipe
      validaIne = "valido"
    }
    if(validaIne == "invalido"){
      ine_status.innerHTML = ""
      equipe_saude.value = ""
    }   
  })

  

  //VALIDA CPF NO INPUT INE..
  let cpf_saude = document.getElementById("cpf_saude").value
  let resValidaCPF = validaCPF(cpf_saude)
  let validacao = "invalido"
  let ineStatus = document.getElementById("ine_status")
  let prosseguir = document.getElementById("prosseguir")

  if (Number(cpf_saude.length) > 0 && resValidaCPF == "true" && ineStatus.innerHTML != ""){
    validacao = "valido"
    document.getElementById("form_saude").setAttribute("action", "/ir_menu_saude")
    document.getElementById("form_saude").setAttribute("method", "POST")
    prosseguir.innerHTML = "sim"
  }
  if (validacao == "invalido"){
    document.getElementById("form_saude").removeAttribute("action")
    document.getElementById("form_saude").removeAttribute("method")
    prosseguir.innerHTML ="nao"      
  }
    
  function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
      return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return "false"
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return "false"
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return "false"
  
    return "true"
  }
})










//VALIDA CPF
document.getElementById("cpf_saude").addEventListener('input', (event)=>{
  let cpf_saude = document.getElementById("cpf_saude").value
  let resValidaCPF = validaCPF(cpf_saude)
  let validacao = "invalido"
  let ineStatus = document.getElementById("ine_status")
  let prosseguir = document.getElementById("prosseguir")

  if (Number(cpf_saude.length) > 0 && resValidaCPF == "true" && ineStatus.innerHTML != ""){
    validacao = "valido"
    document.getElementById("form_saude").setAttribute("action", "/ir_menu_saude")
    document.getElementById("form_saude").setAttribute("method", "POST")
    prosseguir.innerHTML = "sim"
  }
  if (validacao == "invalido"){
    document.getElementById("form_saude").removeAttribute("action")
    document.getElementById("form_saude").removeAttribute("method")
    prosseguir.innerHTML = "nao"     
  }
    
  function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
      return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return "false"
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return "false"
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return "false"
  
    return "true"
  }
})





//SCRIPT MÁSCARA CPF
function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os primeiros 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os próximos 3 dígitos
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere hífen após os últimos 3 dígitos
  return cpf;
}
document.getElementById("cpf_saude").addEventListener('input',function(){
  var campoCPF = this
  setTimeout(function(){
      campoCPF.value = formatarCPF(campoCPF.value)
  }, 1)
})




//MENSAGEM DE ERRO----------------------------------
function acessoSaude(){
  let ine_status = document.getElementById("ine_status")
  let prosseguir = document.getElementById("prosseguir")
  if(ine_status.innerHTML == "" || prosseguir.innerHTML == "nao"){
    let form_cadastro = document.getElementById("form_saude")
    form_cadastro.addEventListener('submit', (event)=>{
      event.preventDefault()
    })
    alert("Dados inválidos")
  }
  else{
    let submitForm = document.getElementById("form_saude")
    submitForm.submit()
  }
}