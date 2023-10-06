crypto.randomUUID().split("").filter(str => {
    if (/[0-9]/.test(str)) return str;
}).join("").concat(Math.random().toString().slice(2)).substring(0, 1)
