import os
from PIL import Image, UnidentifiedImageError


def process_images(input_dir, output_dir):
    if not os.path.exists(input_dir):
        print(f'Error: The Input Directory "{input_dir}" does not exists!')
        return

    os.makedirs(output_dir, exist_ok=True)

    for filename in os.listdir(input_dir):
        input_path = os.path.join(input_dir, filename)

        # Skip dirs
        if os.path.isdir(input_path):
            continue

        try:
            with Image.open(input_path) as img:
                grayscale_img = img.convert("L")

                output_path = os.path.join(output_dir, filename)
                grayscale_img.save(output_path)

                print(
                    f"Picture with the name '{filename}' converted successfully !!!")

        except UnidentifiedImageError:
            print(f'"{filename}": is not a Image')


def main():
    input_directory = 'input-images'
    output_directory = 'output-images'

    process_images(input_directory, output_directory)


if __name__ == '__main__':
    main()
