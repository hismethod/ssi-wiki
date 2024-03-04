#!/bin/bash

# 현재 디렉토리에서 모든 디렉토리를 찾음
find . -type d | while read -r dir; do
    # _category_.json 파일 경로를 정의
    categoryFile="$dir/_category_.json"
    # 해당 파일이 디렉토리에 존재하지 않는 경우, 생성
    if [ ! -f "$categoryFile" ]; then
        # _category_.json 파일 생성
        touch "$categoryFile"
        # 필요한 경우, _category_.json 파일에 초기 내용을 추가
        echo "{}" > "$categoryFile"
    fi
done

echo "모든 디렉토리에 _category_.json 파일이 추가되었습니다."

