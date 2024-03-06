---
title: "DID"
---

> 전 세계적으로 유일하며 중앙 기관이 없이도 인증할 수 있는 식별자

## DID (Decentralized Identifier)

DID(Decentralized Identity, 탈중앙화 신원증명)은 데이터의 주권을 개개인에게 주고 개개인의 데이터를 **탈중앙적(\*)으로 증명할 수 있는 기술**입니다. DID는 **분산원장기술**(Distributed Ledger Technology\*)를 기반으로 사용자의 데이터를 저장하여 안전하고 편리하게 인증할 수 있도록 합니다.

- **분산원장기술** : 중앙서버나 중앙관리자의 제어 없이 분산화된 네트워크의 각 노드(개인)들이 데이터베이스를 공유하고 계속 동기화하는 기술
- **탈중앙화** : 탈중앙화는 중앙 기관이 없는 상태에서 **의사 활동을 결정하는 체제**입니다. **기관의 영향을 받지 않는** 거래자와 거래자간의 **투명한 거래**를 표방하는 것입니다.

## DID 예시

한 사용자가 자신의 DID를 생성하면, 이는 다음과 같은 형태를 가질 수 있습니다:

`did:example:123456789abcdefghi`

이 식별자를 통해 사용자는 디지털 세계 어디에서나 자신의 신원을 안전하게 증명할 수 있습니다. 콜론으로 이어진 텍스트는 아래와 같이 세 부분으로 나뉩니다.

## DID 구성요소

- schema: 여기서 `did`는 DID를 나타내는 스키마를
- DID Method: `example`은 DID를 발급한 블록체인 네트워크를
- DID Method-Specific Identifier: `123456789abcdefghi`는 네트워크 내에서 해당 DID를 고유하게 식별하는 부분입니다.

## DID Document

DID 문서는 JSON 형식으로 구성됩니다. 이 DID Document는 DID의 소유자가 통제할 수 있습니다. 예를 들어, 사용자의 공개 키와 디지털 서명 검증 방법 등이 여기에 포함됩니다.

속성 중 일부는 다음과 같습니다:

- `@context`: JSON-LD 문서의 컨텍스트를 정의합니다.
- `id`: DID를 나타냅니다.
- `authentication`: DID 공개키 리스트를 나타냅니다.
- `service`: DID와 상호작용이 가능한 서비스 리스트를 나타냅니다.

```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:example:123456789abcdefghi",
  "authentication": [
    {
      "id": "did:example:123456789abcdefghi#keys-1",
      "type": "RsaVerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----"
    }
  ],
  "service": [
    {
      "id": "did:example:123456789abcdefghi#vcs",
      "type": "VerifiableCredentialService",
      "serviceEndpoint": "https://example.com/vc/"
    }
  ]
}
```

---

DID는 디지털 신원의 자율성과 보안을 제공하는 혁신적인 기술입니다. 사용자는 자신의 신원 정보를 직접 관리하며, 어느 누구도 이를 통제하거나 변조할 수 없습니다.
