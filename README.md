# Advanced patterns for Building Scalable Software

To Improve Performance of backend apis:
- Trim down middleware
- Optimize DB queries
- Utilize parallel async execution
- implement caching
- use clustering

```
This snippet spins up multiple worker processes and maximize CPU usage

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if(cluster.isMaster){
    for (let i=0; i< numCPUs; i++) cluster.fork();
}else{
    require('./server'); // Start express app in each worker
}
```


