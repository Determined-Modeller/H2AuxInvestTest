class CalculationDict:
    def __init__(self,
                 request_id: str,
                 request_json: str,
                 response_json: str,
                 personal_details: str = "",
                 email: str = "",
                 created_at: str = ""
                 ):
        self.dict = {
            "PK": request_id,
            "request_id": request_id,
            "request_json": request_json,
            "response_json": response_json,
            "personal_details": personal_details,
            "email": email,
            "created_at": created_at
        }

    def get_dict(self):
        return self.dict