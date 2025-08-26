import crypto from 'crypto';

const SECRET_KEY = process.env.STREAM_SECRET || 'mysecretkey';

const STREAMS = {
  
  "beINSports 1": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/13",
      "MED": "http://2mott.com:8080/s99893/8682230/63",
      "HIGH": "http://2mott.com:8080/s99893/8682230/111"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/1",
      "MED": "http://2mott.com:8080/s99893/8682230/49",
      "HIGH": "http://2mott.com:8080/s99893/8682230/99"
    }
  },
  "beINSports 2": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/14",
      "MED": "http://2mott.com:8080/s99893/8682230/64",
      "HIGH": "http://2mott.com:8080/s99893/8682230/112"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/2",
      "MED": "http://2mott.com:8080/s99893/8682230/50",
      "HIGH": "http://2mott.com:8080/s99893/8682230/100"
    }
  },
  "beINSports 3": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/15",
      "MED": "http://2mott.com:8080/s99893/8682230/65",
      "HIGH": "http://2mott.com:8080/s99893/8682230/113"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/3",
      "MED": "http://2mott.com:8080/s99893/8682230/51",
      "HIGH": "http://2mott.com:8080/s99893/8682230/101"
    }
  },
  "beINSports 4": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/16",
      "MED": "http://2mott.com:8080/s99893/8682230/66",
      "HIGH": "http://2mott.com:8080/s99893/8682230/114"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/4",
      "MED": "http://2mott.com:8080/s99893/8682230/52",
      "HIGH": "http://2mott.com:8080/s99893/8682230/102"
    }
  },
  "beINSports 5": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/17",
      "MED": "http://2mott.com:8080/s99893/8682230/67",
      "HIGH": "http://2mott.com:8080/s99893/8682230/115"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/5",
      "MED": "http://2mott.com:8080/s99893/8682230/53",
      "HIGH": "http://2mott.com:8080/s99893/8682230/103"
    }
  },
  "beINSports 6": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/18",
      "MED": "http://2mott.com:8080/s99893/8682230/68",
      "HIGH": "http://2mott.com:8080/s99893/8682230/116"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/6",
      "MED": "http://2mott.com:8080/s99893/8682230/54",
      "HIGH": "http://2mott.com:8080/s99893/8682230/104"
    }
  },
  "beINSports 7": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/19",
      "MED": "http://2mott.com:8080/s99893/8682230/69",
      "HIGH": "http://2mott.com:8080/s99893/8682230/117"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/7",
      "MED": "http://2mott.com:8080/s99893/8682230/55",
      "HIGH": "http://2mott.com:8080/s99893/8682230/105"
    }
  },
  "beINSports 8": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/20",
      "MED": "http://2mott.com:8080/s99893/8682230/70",
      "HIGH": "http://2mott.com:8080/s99893/8682230/118"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/8",
      "MED": "http://2mott.com:8080/s99893/8682230/56",
      "HIGH": "http://2mott.com:8080/s99893/8682230/106"
    }
  },
  "beINSports 9": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/21",
      "MED": "http://2mott.com:8080/s99893/8682230/71",
      "HIGH": "http://2mott.com:8080/s99893/8682230/119"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/9",
      "MED": "http://2mott.com:8080/s99893/8682230/57",
      "HIGH": "http://2mott.com:8080/s99893/8682230/107"
    }
  },
  "ON Time Sport 1": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/400",
      "MED": "http://viphlvp.xyz:8080/VIP01772172494403895/5907a1da7617/130299",
      "HIGH": "http://2mott.com:8080/s99893/8682230/400"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/400",
      "MED": "http://viphlvp.xyz:8080/VIP01772172494403895/5907a1da7617/130299",
      "HIGH": "http://2mott.com:8080/s99893/8682230/400"
    }
  },
  "ON Time Sport 2": {
    "server1": {
      "LOW": "http://2mott.com:8080/s99893/8682230/401",
      "MED": "http://viphlvp.xyz:8080/VIP01772172494403895/5907a1da7617/130300",
      "HIGH": "http://2mott.com:8080/s99893/8682230/401"
    },
    "server2": {
      "LOW": "http://2mott.com:8080/s99893/8682230/401",
      "MED": "http://viphlvp.xyz:8080/VIP01772172494403895/5907a1da7617/130300",
      "HIGH": "http://2mott.com:8080/s99893/8682230/401"
    }
  }

};

export default function handler(req, res) {
  const { channel, server, quality } = req.query;

  if (!channel || !server || !quality || !STREAMS[channel]?.[server]?.[quality]) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const originalUrl = STREAMS[channel][server][quality];
  const expire = Math.floor(Date.now() / 1000) + 8; // expire in 8sec
  const hash = crypto.createHmac('sha256', SECRET_KEY)
                     .update(`${originalUrl}:${expire}`)
                     .digest('hex');

  const signedUrl = `${originalUrl}?expire=${expire}&token=${hash}`;
  res.json({ url: signedUrl });
}
