STRING_INPUT = 'abcxabcbb'


def find_longest_substring(string):
    char_index = {}

    start = 0
    max_length = 0
    longest_substring = ''

    for end in range(len(string)):
        current_char = string[end]

        # If the character is already in the dictionary and within the current window
        if current_char in char_index and char_index[current_char] >= start:
            start = char_index[current_char] + 1

        char_index[current_char] = end

        current_length = end - start + 1
        if current_length > max_length:
            max_length = current_length
            longest_substring = string[start:end + 1]

    return longest_substring


def main():
    result = find_longest_substring(STRING_INPUT)
    print(f"The longest substring without repeating characters is: '{result}'")


if __name__ == '__main__':
    main()
