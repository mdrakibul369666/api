import sys

# Access command-line arguments passed from Express.js
variable1 = sys.argv[1]
variable2 = sys.argv[2]

# Perform any operations with the variables
result = variable1 + ' ' + variable2

# Print the result to be received by Express.js
print(result)
