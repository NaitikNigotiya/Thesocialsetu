import os
import urllib.request

file_map = {
    '1.1.jpg': '1wV-vCaGwZT27-H_s-eBtz1FQBEi0-K2x',
    '1.2.jpg': '1Wb-CWczrr8ZEwLwuk87p-cjg4nRwzm3_',
    '2.1.jpg': '1QCpVfkS5nAh9-_KlQbxMH5vk-MvDxwyS',
    '2.2.jpg': '1R25BySa2zRygL5gCQ_AFmrWDzsSIp0jr',
    '3.1.jpeg': '1O1t8FCdCoosA4DsZl2aJTPV8rHQ-LeYJ',
    '3.2.jpg': '1vxRNiKVOr8dAGHmg7nJTsrZ7IKSfmQRv',
    '4.1.png': '1TF0H8iKXlKoyVBHIszsFJDuNstsUUxd1',
    '4.2.jpg': '1bWne8jVTumlpsPqiy7UfzszeavCfIH9r',
    '5.1.jpg': '10-N9wLaomrugB0gMJPeCzyHi621otIY_',
    '5.2.jpg': '1wXJFupBrI7zxCFMOzFsWacGoE-vQOAuM'
}

os.makedirs('src/assets/blog', exist_ok=True)

for fname, fid in file_map.items():
    out_path = os.path.join('src/assets/blog', fname)
    dl_url = f'https://lh3.googleusercontent.com/d/{fid}'
    print(f"Downloading {fname} from {dl_url}...")
    try:
        urllib.request.urlretrieve(dl_url, out_path)
        size = os.path.getsize(out_path)
        print(f"Successfully saved {fname} ({size} bytes)")
    except Exception as e:
        print(f"Failed {fname}: {e}")
