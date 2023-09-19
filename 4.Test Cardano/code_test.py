def reverse_array(arg):
    arg.reverse()
    pass

def reverse_array_slicing(arg):
    result = arg[::-1]
    pass



def uppercase_array(arg):
    resul = arg.upper()
    pass


def find_word_count(arg):
    words = arg.split()
    word_count = {}

    for word in words:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1

    return word_count

    pass


def composeu(f1, f2):
    def composed_function(x):
        return f2(f1(x))
    return composed_function
    pass

def increment(x):
    return x + 1

def double(x):
    return x * 2

composed_function = composeu(increment, double)
print(composed_function(3))


def write_file_contents_to_console(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            print(content)
    except FileNotFoundError:
        print(f"The file '{file_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Provide the path to the file you want to read
file_path = 'example.txt'
write_file_contents_to_console(file_path)
pass

def handle_invalid_argument(number):
    try:
        square = number ** 2
        return square
    except TypeError:
        raise ValueError("Invalid argument: Please provide a valid number")

try:
    input_number = "Hi"
    result = handle_invalid_argument(input_number)
    print("The square of {input_number} is {result}")
except ValueError as ve:
    print(ve)
except Exception as e:
    print("An error occurred: {e}")
pass

def puzzle(numbers):
    for i in range(len(numbers) - 1):
        if numbers[i] == numbers[i + 1]:
            return True
    return False

def main():
    try:
        input_sequence = input("Enter a sequence of numbers separated by commas: ")
        numbers = [int(num) for num in input_sequence.split("")]
        
        if puzzle(numbers):
            print("Snap")
        else:
            print("".join(map(str, numbers)))
    except ValueError:
        print("Invalid input. Enter a sequence of numbers separated by commas.")

if __name__ == "__main__":
    main()

    pass

