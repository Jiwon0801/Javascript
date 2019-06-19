from time import sleep

# 동기식 처리 방식. Python

def sleep_3s():
    sleep(3)
    print('Wake up!')

print('Start sleeping')
sleep_3s() # blocking 속성
print('End of program')