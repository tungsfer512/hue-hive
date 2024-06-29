# Build HIVE from source

## Build command

### Full build

```bash
mvn clean package -Pdist -Drat.numUnapprovedLicenses=500 -DskipTests -Dmaven.javadoc.skip=true
```

### Partial build from task ```<task>```

```bash
mvn clean package -Pdist -Drat.numUnapprovedLicenses=500 -DskipTests -Dmaven.javadoc.skip=true -rf :<task>
```

## Task 

- org.apache.hive:hive-storage-api
- org.apache.hive:hive
- org.apache.hive:hive-classifications
- org.apache.hive:hive-shims-common
- org.apache.hive:hive-shims-0.23
- org.apache.hive:hive-shims
- org.apache.hive:hive-standalone-metastore
- org.apache.hive:hive-standalone-metastore-common-code
- org.apache.hive:hive-common
- org.apache.hive:hive-service-rpc
- org.apache.hive:hive-serde
- org.apache.hive:hive-metastore
- org.apache.hive:hive-vector-code-gen-utilities
- org.apache.hive:hive-parser
- org.apache.hive:hive-udf
- org.apache.hive:hive-llap-common
- org.apache.hive:hive-llap-client
- org.apache.hive:hive-llap-tez
- org.apache.hive:hive-metastore-server
- org.apache.hive:hive-query-language
- org.apache.hive:hive-testutils
- org.apache.hive:hive-llap-server
- org.apache.hive:hive-hpl/sql
- org.apache.hive:hive-service
- org.apache.hive:hive-accumulo-handler
- org.apache.hive:hive-jdbc
- org.apache.hive:hive-beeline
- org.apache.hive:hive-cli
- org.apache.hive:hive-contrib
- org.apache.hive:hive-druid-handler
- org.apache.hive:hive-hbase-handler
- org.apache.hive:hive-jdbc-handler
- org.apache.hive:hive-hcatalog
- org.apache.hive:hive-hcatalog-core
- org.apache.hive:hive-hcatalog-pig-adapter
- org.apache.hive:hive-hcatalog-server-extensions
- org.apache.hive:hive-hcatalog-webhcat-java-client
- org.apache.hive:hive-hcatalog-webhcat
- org.apache.hive:hive-streaming
- org.apache.hive:hive-llap-external-client
- org.apache.hive:hive-shims-aggregator
- org.apache.hive:hive-kudu-handler
- org.apache.hive:hive-kafka-storage-handler
- org.apache.hive:hive-packaging
- org.apache.hive:hive-metastore-tools
- org.apache.hive:hive-metastore-tools-common-libraries
- org.apache.hive:hive-metastore-benchmarks
- org.apache.hive:hive-upgrade-acid
- org.apache.hive:hive-pre-upgrade-acid
