# Printing
puts 'Goodbye, World!'
puts 'newline test'
p 'Goodbye, World!'
p 'newline test'
print 'Goodbye, World!'
print 'new line test'
# Goodbye, World!
# newline test
# "Goodbye, World!"
# "newline test"
# Goodbye, World!new line test

# Variables
myString = 'I am programming!'
myBoolean = true
myNumber = 5
puts myString
puts myBoolean
puts myNumber
# I am a programming!
# true
# 5

# Math
testOne = 6 * 5 #30
testTwo = 36 % 6 #0 나머지
testThree = 12 - 5 #7

# Strings
"Hi!".length #is 3
"Hi!".reverse #is !iH
"Hi!".upcase #is HI!
"Hi!".downcase #is hi!
"Hi!".downcase.reverse #is !ih
"Happy Birthday!".include?("Happy") //true

# Arrays
myArray = []  # an empty array
myOtherArray = [1, 2, 3]  # an array with three elements
myOtherArray[3] = 4

# Hashes and Symbols
myHash={
  "Key" => "value",
  "Key2" => "value2"
}
puts myHash["Key"] # puts value
# Or
myHash=Hash.new()
myHash["Key"]="value"
myHash["Key2"]="value2"
puts myHash[:Key] # puts "value"
# Or
myHash={
  Key: "value",
  Key2: "value2",
}
puts myHash[:Key] # puts "value"

# Conditional Statements
# if condition
#   something to be done
# end
booleanOne = true
randomCode = "Hi!"
if booleanOne
  puts "I will be printed!"
elsif randomCode.length>=1
  puts "Even though the above code is true, I won't be executed because the earlier if statement was true!"
else
  puts "I won't be printed because the if statement was executed!"
end

# Unless, Until, and While
# unless condition
#   #thing to be done if the condition is false
# end
# while condition
#   #something to do
# end
# until condition
#   #something to do
# end
#Make your loop below!
i = 0
while i < 7
    puts "I'm looping!"
    i = i + 1
end
# I'm looping!
# I'm looping!
# I'm looping!
# I'm looping!
# I'm looping!
# I'm looping!
# I'm looping!


# Methods
# def methodname
#   # method code here
# end
#define the method here
def square(number)
  puts number**2
end
#don't forget to call the method with the argument
square(2)

