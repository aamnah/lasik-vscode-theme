# Comment

class Human:
    def __init__(self, name = '', age = 0):
        self.name = name
        self.age = age

    def __str__(self):
        return 'Name: {}, Age: {}'.format(self.name, self.age)

    name = ''
    age = 0


"""
Sample 
multiline
comment block
"""

filename_int = 'integers.txt'
filename_flt = 'floats.txt'

def is_integer(x):
    try:
        isinstance(int(x), int)
        return True
    except ValueError:
        return False

def write_number_to_file(x):
    try:
        file_int = open(filename_int, "a") # a is for append mode
        file_flt = open(filename_flt, "a")

        if (is_integer(x)):
            file_int.write(x+"\n")
        else:
            file_flt.write(x+"\n")

        file_int.close()
        file_flt.close()
    except Exception as e:
        print(f"ERROR: {e}")


# Keep asking for input until empty input given
while True:
    number = input("Gimme an integer or floating point number: ")
    
    if number == "": break

    write_number_to_file(number)