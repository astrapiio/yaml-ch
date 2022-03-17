# yaml-ch
A simple program that changes a value in yaml file in given yaml path
## Usage
General usage:
```
./yaml-ch PATH_TO_YAML_FILE YAML_PATH VALUE
```
Example:

We have a yaml file which is located at `/tmp/test.yaml`, has the following content:

```yaml
enrichment_image:
  repository: xxxxxx.dkr.ecr.us-east-1.amazonaws.com/nsure/enrichment
  replicaCount: 3
  tag: latest
  name: enrichment
```
We would like to change the tag field inside the enrichment_image object from `latest` to `123`, the yaml path is similar to json which ends up to be `enrichment_image.tag`

The following command shuold be executed in order th acheive this:

```
./yaml-ch /tmp/test.yaml enrichment_image.tag 123
```

The result of `/tmp/test.yaml` will be:
```yaml
enrichment_image:
  repository: xxxxxx.dkr.ecr.us-east-1.amazonaws.com/nsure/enrichment
  replicaCount: 3
  tag: 123
  name: enrichment
```

* note: the yaml modification done within the same file, this program does not create new files.

## build
Building steps for compiled binary
```bash
npm i
pkg app.js
```
shuold produce 3 files for each os (windows, macos, linux) using the prefix app- for each os.