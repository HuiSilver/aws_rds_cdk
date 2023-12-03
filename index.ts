import * as rds from '@aws-cdk/aws-rds'

const sqlServerlInstance = new rds.DatabaseInstance(this,'sqlServer',{
    //engine 타입과 버전 설정
    engine:rds.DatabaseInstanceEngine.sqlServerSe({version:rds.SqlServerEngineVersion.VER_15_00_4043_16_V1}),
    multiAz: true,
    characterSetName:'Latin1_General_100_CI_AS_SC_UTF8'
})