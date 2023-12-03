import * as rds from '@aws-cdk/aws-rds'
import * as log from '@aws-cdk/aws-logs'
import * as cdk from '@aws-cdk/core'


const sqlServerlInstance = new rds.DatabaseInstance(this,'sqlServer',{
    //engine 타입과 버전 설정
    engine:rds.DatabaseInstanceEngine.sqlServerSe({version:rds.SqlServerEngineVersion.VER_15_00_4043_16_V1}),
    multiAz: true,
    characterSetName:'Latin1_General_100_CI_AS_SC_UTF8',
    //클라우드왓치 모니터링 로그 
    cloudwatchLogsExports:['error','general','agent'],
    cloudwatchLogsRetention:log.RetentionDays.TWO_WEEKS,
    backupRetention:cdk.Duration.days(14),
    enablePerformanceInsights:true,
    performanceInsightRetention:rds.PerformanceInsightRetention.LONG_TERM, // or DEFAULT = 7 days
    monitoringInterval: cdk.Duration.minutes(5),
    port:1344,
})