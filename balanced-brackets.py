s = "{{[[(())]]}}"
'''
def isBalanced(s):
    print(f'Revisando {s}')
    openingChars = ["{", "[", "("]
    closingChars = ["}", "]", ")"]
    if len(s) % 2 != 0:
        return "NO"
    elif len(s)==0:
        return "YES"
    else:
        for i in range(len(s)):
            if s[i] in closingChars:
                j = closingChars.index(s[i])
                k = s[:i][::-1].find(openingChars[j])
                if k==-1:
                    return "NO"
                else:
                    if isBalanced(s[i-k:i])=="NO":
                        return "NO"
    return "YES"

print(isBalanced(s))
'''

def isBalanced(s):
    # print(f'Checking {s}')
    openingChars = ["{", "[", "("]
    closingChars = ["}", "]", ")"]
    if len(s) % 2 != 0:
        return "NO"
    elif len(s)==0:
        return "YES"
    else:
        for i in range(len(s)):
            if s[i] in closingChars:
                j = closingChars.index(s[i])
                k = s[:i][::-1].find(openingChars[j])
                if k==-1:
                    return "NO"
                else:
                    if isBalanced(s[i-k:i])=="NO":
                        return "NO"
                    else:
                        return isBalanced(s[:i-k-1] + s[i+1:])
        return "NO"

print(isBalanced(s))