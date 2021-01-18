const INT_MAX = Math.pow(2,1023)

module.exports = {
    lcsLength: (X,Y)=>{
        const m = X.length
        const n = Y.length
     
        // lookup table stores solution to already computed sub-problems
        // i.e. lookup[i][j] stores the length of LCS of substring
        // X[0..i-1] and Y[0..j-1]
        let lookup = new Array(m+1)
        
        for(let i = 0; i < m+1; i++) {
            lookup[i] = [n+1]
        }
     
        // first column of the lookup table will be all 0
        for (let i = 0; i <= m; i++)
            lookup[i][0] = 0
     
        // first row of the lookup table will be all 0
        for (let j = 0; j <= n; j++)
            lookup[0][j] = 0
     
        // fill the lookup table in bottom-up manner
        for (let i = 1; i <= m; i++)
        {
            for (let j = 1; j <= n; j++)
            {
                // if current character of X and Y matches
                if (X[i - 1] == Y[j - 1])
                    lookup[i][j] = lookup[i - 1][j - 1] + 1
     
                // else if current character of X and Y don't match
                else
                    lookup[i][j] = Math.max(lookup[i - 1][j], lookup[i][j - 1])
            }
        }
     
        // LCS will be last entry in the lookup table
        return lookup[m][n]
    },

    scsLength: (X,Y)=>{
        const m = X.length
        const n = Y.length
     
        // lookup table stores solution to already computed sub-problems
        // i.e. lookup[i][j] stores the length of SCS of substring
        // X[0..i-1] and Y[0..j-1]
        let lookup = new Array(m+1)
        
        for(let i = 0; i < m+1; i++) {
            lookup[i] = [n+1]
        }

        // initialize first column of the lookup table
        for (let i = 0; i <= m; i++)
            lookup[i][0] = i
     
        // initialize first row of the lookup table
        for (let j = 0; j <= n; j++)
            lookup[0][j] = j
     
        // fill the lookup table in bottom-up manner
        for (let i = 1; i <= m; i++)
        {
            for (let j = 1; j <= n; j++)
            {
                // if current character of X and Y matches
                if (X[i - 1] == Y[j - 1])
                    lookup[i][j] = lookup[i - 1][j - 1] + 1
     
                // else if current character of X and Y don't match
                else
                    lookup[i][j] = Math.min(lookup[i - 1][j] + 1, lookup[i][j - 1] + 1)
            }
        }
     
        // SCS will be last entry in the lookup table
        return lookup[m][n];
    },

    ldLength: (X,Y)=>{
        const m = X.length
        const n = Y.length

        // for all i and j, T[i,j] will hold the Levenshtein distance between
        // the first i characters of X and the first j characters of Y
        // note that T has (m+1)*(n+1) values
        let T = new Array(m+1)
        
        for(let i = 0; i < m+1; i++) {
            T[i] = [n+1]
        }

        //initializing with 0
        for (let i = 0; i <= m; i++)
        {
            for (let j = 0; j <= n; j++)
            {
                T[i][j] = 0
            }
        }

        // source prefixes can be transformed into empty string by
        // dropping all characters
     
        for (let i = 1; i <= m; i++)
            T[i][0] = i                // (case 1)
     
        // target prefixes can be reached from empty source prefix
        // by inserting every character
     
        for (let j = 1; j <= n; j++)
            T[0][j] = j                // (case 1)
     
        let substitutionCost;
     
        // fill the lookup table in bottom-up manner
        for (let i = 1; i <= m; i++)
        {
            for (let j = 1; j <= n; j++)
            {
                if (X[i - 1] == Y[j - 1])                // (case 2)
                    substitutionCost = 0                // (case 2)
                else
                    substitutionCost = 1                // (case 3c)
     
                T[i][j] = Math.min(Math.min(T[i - 1][j] + 1,       // deletion (case 3b)
                                            T[i][j - 1] + 1),      // insertion (case 3a)
                                            T[i - 1][j - 1] + substitutionCost) // replace (case 2 & 3c)
            }
        }
        
        for (let i = 0; i <= m; i++)
        {
            for (let j = 0; j <= n; j++)
            {
                process.stdout.write(' '+T[i][j]+' ')
            }
            console.log("\n")
        }

        return T[m][n]
    },

    lisLength: (arr)=>{
        const n = arr.length
        let L = new Array(n)
        for(i=0 ; i<n ; i++)
            L[i]=0
        
        // longest increasing subsequence ending with arr[0] has length 1
        L[0] = 1

        // start from second element in the array
        for (let i = 1; i < n; i++)
        {
            // do for each element in subarray arr[0..i-1]
            for (let j = 0; j < i; j++)
            {
                // find longest increasing subsequence that ends with arr[j]
                // where arr[j] is less than the current element arr[i]

                if (arr[j] < arr[i] && L[j] > L[i])
                    L[i] = L[j];
            }

            // include arr[i] in LIS
            L[i]++;
        }

        // find longest increasing subsequence (having maximum length)
        let lis = -INT_MAX;
        for(let i=0 ; i<n ; i++)
            lis = Math.max(lis, L[i])

        return lis
    },

    mcm: (dims)=>{
        const n = dims.length
        // c[i,j] = Minimum number of scalar multiplications (i.e., cost)
        // needed to compute the matrix M[i]M[i+1]...M[j] = M[i..j]
        // The cost is zero when multiplying one matrix
        let c = new Array(n+1)
        let brackets = new Array(n+1)

        for(let i = 0; i < n+1; i++) {
            c[i] = [n+1]
            brackets[i] = [n+1]
        }

        for (let i = 0; i <= 5; i++)
            for (let j = 0; j <= 5; j++)
            {
                c[i][j]=0
                brackets[i][j] = 0
            }
     
        for (let len = 2; len <= n; len++) // Subsequence lengths
        {
            for (let i = 1; i <= n - len + 1; i++)
            {
                let j = i + len - 1
                c[i][j] = INT_MAX
     
                for (let k = i; j < n && k <= j - 1; k++)
                {
                    let cost = c[i][k] + c[k + 1][j] + dims[i - 1]*dims[k]*dims[j]
     
                    if (cost < c[i][j]){
                        c[i][j] = cost
                        brackets[i][j] = k;
                    }
                }
            }
        }

        return c[1][n - 1]
    },

    kp: (v,w,W)=>{
        const n = v.length
        // T[i][j] stores the maximum value that can be attained with
        // weight less than or equal to j using items up to first i items
        let T = new Array(n+1)
        
        for(let i = 0; i < n+1; i++) {
            T[i] = [W+1]
        }
     
        for (let j = 0; j <= W; j++)
            T[0][j] = 0
     
        // do for ith item
        for (let i = 1; i <= n; i++)
        {
            // consider all weights from 0 to maximum capacity W
            for (let j = 0; j <= W; j++)
            {
                // don't include ith element if j-w[i-1] is negative
                if (w[i-1] > j)
                    T[i][j] = T[i-1][j]
                else
                // find max value by excluding or including the ith item
                    T[i][j] = Math.max(T[i-1][j],
                                T[i-1][j-w[i-1]] + v[i-1])
            }
        }
     
        // return maximum value
        return T[n][W]
    },

    pp: (arr)=>{
        const n = arr.length
        let sum = 0;
        for (let i = 0; i < n; i++)
            sum += arr[i];

        if(sum%2 != 0)
            return false
        
        sum = sum/2

        // T[i][j] stores true if subset with sum j can be attained with
        // using items up to first i items
        let T = new Array(n+1)
        
        for(let i = 0; i < n+1; i++) {
            T[i] = [sum+1]
        }

        // if 0 items in the list and sum is non-zero
        for (let j = 1; j <= sum; j++)
            T[0][j] = false
     
        // if sum is zero
        for (let i = 0; i <= n; i++)
            T[i][0] = true
     
        // do for ith item
        for (let i = 1; i <= n; i++)
        {
            // consider all sum from 1 to sum
            for (let j = 1; j <= sum; j++)
            {
                // don't include ith element if j-arr[i-1] is negative
                if (arr[i - 1] > j)
                    T[i][j] = T[i - 1][j]
                else
                // find subset with sum j by excluding or including the ith item
                    T[i][j] = T[i - 1][j] || T[i - 1][j - arr[i - 1]]
            }
        }
     
        // return maximum value
        return T[n][sum]
    },

    rcp: (price,n)=>{
        // T[i] stores maximum profit achieved from rod of length i
        let T = new Array(n + 1)
     
        // initialize maximum profit to 0
        for (let i = 0; i <= n; i++)
            T[i] = 0
     
        // consider rod of length i
        for (let i = 1; i <= n; i++)
        {
            // divide the rod of length i into two rods of length j
            // and i-j each and take maximum
            for (let j = 1; j <= i; j++)
                T[i] = Math.max(T[i], price[j - 1] + T[i - j])
        }
     
        // T[n] stores maximum profit achieved from rod of length n
        return T[n]
    },

    ccmp: (S,N)=>{
        const n = S.length
        // T[i] stores minimum number of coins needed to get total of i
        let T = new Array(N + 1)
        T[0] = 0    // 0 coins are needed to get total of i
     
        for (let i = 1; i <= N; i++)
        {
            // initialize minimum number of coins needed to infinity
            T[i] = INT_MAX
            let res = INT_MAX
     
            // do for each coin
            for (let c = 0; c < n; c++)
            {
                // check if index doesn't become negative by including
                // current coin c
                if (i - S[c] >= 0)
                    res = T[i - S[c]]
     
                // if total can be reached by including current coin c,
                // update minimum number of coins needed T[i]
                if (res != INT_MAX)
                    T[i] = Math.min(T[i], res + 1)
            }
        }
     
        // T[N] stores the minimum number of coins needed to get total of N
        return T[N]
    },

    wbp: function wbp(s, dict, answer){
        var strLen = s.length
        if (strLen === 0) {
            return true
        } else {
            var prefix = ''
            for (var i = 0; i < strLen; i++) {
                prefix += s.charAt(i)
                if (dict.indexOf(prefix) > -1) {
                    answer += prefix + ' '
                    var suffix = s.slice(i + 1)
                    if (wbp(suffix, dict, answer)) {
                        return true
                    }
                }
            }
        }
    },
}